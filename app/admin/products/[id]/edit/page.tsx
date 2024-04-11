import db from "@/db/db";
import AdminPageHeader from "../../../_components/page-header";
import ProductForm from "../../_components/product-form";

export default async function EditProductPage({ params: { id },
}: {params: { id: string }}) {
    const product = await db.product.findUnique({ where: { id }});
    return (
        <>
            <AdminPageHeader>Edit Product</AdminPageHeader>
            <ProductForm  product={ product } />
        </>
    );
}