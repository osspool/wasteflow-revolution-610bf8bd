
import React from "react";
import { ClipboardList, FileCheck, BarChart3, Workflow } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="p-6 bg-indigo-50 rounded-xl">
        <ClipboardList className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Regulatory Compliance</h3>
        <p className="text-slate-600">
          Streamline document management and ensure compliance with automated
          tracking and updates.
        </p>
      </div>
      <div className="p-6 bg-indigo-50 rounded-xl">
        <FileCheck className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Smart Contracts</h3>
        <p className="text-slate-600">
          Digitize and automate contract management with intelligent
          workflows and approvals.
        </p>
      </div>
      <div className="p-6 bg-indigo-50 rounded-xl">
        <BarChart3 className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Financial Insights</h3>
        <p className="text-slate-600">
          Gain real-time visibility into operations and financial
          performance with advanced analytics.
        </p>
      </div>
      <div className="p-6 bg-indigo-50 rounded-xl">
        <Workflow className="h-12 w-12 text-indigo-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-900">Workflow Automation</h3>
        <p className="text-slate-600">
          Optimize operations with automated workflows that reduce manual
          tasks and improve efficiency.
        </p>
      </div>
    </div>
  );
};
