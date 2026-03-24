import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ subtitle, title, className, centered = false }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", centered && "text-center flex flex-col items-center", className)}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-4 mb-4"
      >
        {!centered && <div className="w-12 h-[1px] bg-gold-500" />}
        <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gold-500">
          {subtitle}
        </span>
        {centered && <div className="w-12 h-[1px] bg-gold-500 hidden sm:block" />}
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-serif text-white leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}
