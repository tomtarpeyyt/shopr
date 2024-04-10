import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: { pricePaidInPennies: true },
        _count: true
    });

    return { amount: (data._sum.pricePaidInPennies || 0) / 100, numberOfSales: data._count };
}

export default async function AdminDashboard() {
    const salesData = await getSalesData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DashboardCard title="Sales" subtitle={ formatNumber(salesData.numberOfSales) } body={ formatCurrency(salesData.amount) } />
            <DashboardCard title="Products" subtitle="description..." body="some body text in here" />
            <DashboardCard title="Customers" subtitle="description..." body="some body text in here" />
        </div>
    );
}

type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashboardCard({title, subtitle, body}: DashboardCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>
    )
}