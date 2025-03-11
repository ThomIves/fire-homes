import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPropertyById } from "@/data/properties";
import EditPropertyForm from "./edit-property-form";

export default async function EditProperty({
  params,
}: {
  params: Promise<any>;
}) {
  const paramsValue = await params;
  const property = await getPropertyById(paramsValue.propertyId);
  console.log({ property });
  return (
    <div>
      <Breadcrumbs
        items={[
          { href: "admin-dashboard", label: "Dashboard" },
          { label: "Edit Property" },
        ]}
      />
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Edit Property</CardTitle>
        </CardHeader>
        <CardContent>
          <EditPropertyForm
            id={property.id}
            address1={property.address1}
            address2={property.address2}
            city={property.city}
            state={property.state}
            zipCode={property.zipCode}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            description={property.description}
            price={property.price}
            status={property.status}
          />
        </CardContent>
      </Card>
    </div>
  );
}
