import AdminPageHeader from "../../_components/page-header";
import FilezForm from "../_components/filez-form";
import ProductForm from "../_components/product-form";

export default function NewProductPage() {
    return (
        <>
            <AdminPageHeader>Add Product</AdminPageHeader>
            <ProductForm />
            <FilezForm />
        </>
    );
}