
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ClientOnly from "@/app/components/ClientOnly";
import ListingClient from "./ListingClient";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
        <EmptyState />
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        // reservations={reservations}
        currentUser={currentUser}
      />
      </ClientOnly>
  );
}
 
export default ListingPage;