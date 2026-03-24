import { useState, useCallback, useEffect } from "react";
import { useListLeads, useUpdateLeadStatus, getListLeadsQueryKey } from "@workspace/api-client-react";
import { format } from "date-fns";
import { ShieldAlert, Loader2 } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { setAuthTokenGetter, type ListLeadsStatus, type UpdateLeadStatusBodyStatus } from "@workspace/api-client-react";

export default function LeadsAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [filterStatus, setFilterStatus] = useState<ListLeadsStatus | 'all'>('all');

  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: leadsRes, isLoading, error: fetchError } = useListLeads(
    filterStatus === 'all' ? {} : { status: filterStatus },
    { query: { enabled: isAuthenticated } as any }
  );

  const updateMutation = useUpdateLeadStatus();

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      await updateMutation.mutateAsync({
        id,
        data: { status: newStatus as UpdateLeadStatusBodyStatus }
      });
      queryClient.invalidateQueries({ queryKey: getListLeadsQueryKey() });
      toast({ title: "Status updated successfully" });
    } catch {
      toast({ title: "Failed to update status", variant: "destructive" });
    }
  };

  const handleLogin = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      toast({ title: "Please enter a password", variant: "destructive" });
      return;
    }
    setAuthTokenGetter(() => Promise.resolve(password));
    setIsAuthenticated(true);
  }, [password, toast]);

  useEffect(() => {
    if (isAuthenticated && fetchError) {
      const is401 = fetchError.message?.includes("401") || fetchError.message?.includes("403");
      if (is401) {
        setIsAuthenticated(false);
        setAuthTokenGetter(null);
        toast({ title: "Invalid credentials", variant: "destructive" });
      }
    }
  }, [isAuthenticated, fetchError, toast]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="bg-card p-8 border border-white/10 shadow-2xl max-w-md w-full text-center">
          <ShieldAlert className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="text-2xl font-serif text-white mb-2">Admin Access</h2>
          <p className="text-gray-400 text-sm mb-6">Enter your admin password to continue.</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-background border border-white/10 px-4 py-3 text-center text-white focus:outline-none focus:border-gold-500"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button type="submit" className="w-full bg-gold-500 text-background font-semibold py-3 uppercase tracking-wider hover:bg-gold-400">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const leads = leadsRes?.data || [];

  const statusColors: Record<string, string> = {
    new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    contacted: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    converted: "bg-green-500/10 text-green-400 border-green-500/20",
    closed: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif text-white">Lead Management</h1>
            <p className="text-gray-400 mt-1">Review and manage booking inquiries.</p>
          </div>

          <div className="flex gap-2">
            {['all', 'new', 'contacted', 'converted', 'closed'].map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as ListLeadsStatus | 'all')}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                  filterStatus === status ? "bg-gold-500 text-background border-gold-500 font-bold" : "bg-card border-white/10 hover:border-gold-500/50"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold-500 animate-spin" />
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-card border border-white/5 p-12 text-center">
            <p className="text-gray-400">No leads found for the selected filter.</p>
          </div>
        ) : (
          <div className="overflow-x-auto border border-white/10">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase tracking-wider text-xs bg-black text-gray-500 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Client Info</th>
                  <th className="px-6 py-4 font-medium">Inquiry</th>
                  <th className="px-6 py-4 font-medium">Details</th>
                  <th className="px-6 py-4 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-card">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-5 text-gray-400 align-top">
                      {format(new Date(lead.createdAt), 'MMM d, yyyy')}
                      <div className="text-xs mt-1 opacity-50">{format(new Date(lead.createdAt), 'HH:mm')}</div>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="font-medium text-white mb-1">{lead.name}</div>
                      <div className="text-gray-400 flex flex-col gap-0.5 text-xs">
                        <a href={`mailto:${lead.email}`} className="hover:text-gold-500">{lead.email}</a>
                        <a href={`tel:${lead.phone}`} className="hover:text-gold-500">{lead.phone}</a>
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top">
                      <div className="font-medium text-gold-500 mb-1">
                        {lead.packageName || (lead.packageId ? `Package ID: ${lead.packageId}` : 'General Inquiry')}
                      </div>
                      <div className="text-gray-400 text-xs">
                        {lead.destination && <span className="uppercase">{lead.destination} &bull; </span>}
                        {lead.travelDate ? `Date: ${lead.travelDate}` : 'Dates flexible'}
                        {lead.groupSize && ` \u2022 ${lead.groupSize} Guests`}
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top max-w-[250px]">
                      <div className="truncate text-gray-400 text-xs whitespace-normal" title={lead.message || ''}>
                        {lead.message ? lead.message : <span className="italic opacity-50">No message provided</span>}
                      </div>
                    </td>
                    <td className="px-6 py-5 align-top text-right">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className={`text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full border appearance-none text-center cursor-pointer outline-none focus:ring-2 focus:ring-gold-500/50 ${statusColors[lead.status]}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
