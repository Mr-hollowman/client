import { Add } from "@mui/icons-material";
import { useTable } from "@pankod/refine-core";
import { Box, Typography, Stack } from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";
import { CustomButton, PropertyCard } from "components";
const AllProperties = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError }
  } = useTable();
  const allProperties = data?.data ?? [];
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>
  return (
    <Box>
      <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
        <Typography fontSize={25} fontWeight={700} color="#11142D">All Properties</Typography>
        <CustomButton title="Add Property" handleClick={() => navigate("/properties/create")} backgroundColor="#475BE8" color="#FCFCFC" icon={<Add />} />
      </Stack>

      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {allProperties.map((property)=>{
          return(
            <PropertyCard
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo = {property.photo}
             />
          )
        })}
      </Box>
    </Box>
  )
}

export default AllProperties
