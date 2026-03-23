import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminTopBar } from "@/components/admin/AdminTopBar";

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased">
      <AdminSidebar />
      <AdminTopBar />
      <div className="ml-64 min-h-screen px-8 pb-12 pt-24">
        <Breadcrumbs variant="admin" className="mb-6 text-slate-500 [&_a]:hover:text-primary [&_span]:text-slate-800" />
        {children}
      </div>
    </div>
  );
}
