import { useList } from "@pankod/refine-core"
import { Box, Typography, Stack } from "@pankod/refine-mui"
import {
    PieChart,
    PropertyReferrals,
    TotalRevenue,
    PropertyCard,
    TopAgent
} from "components"

const Home = () => {
    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display={"flex"} flexWrap={"wrap"} gap={4}>
                <PieChart
                    title={"Properties for sale"}
                    value={648}
                    series={[75, 25]}
                    colors={["#275BE8","#c4e8ef"]}
                />
                <PieChart
                    title={"Properties for Rent"}
                    value={550}
                    series={[722, 25]}
                    colors={["#275BE8","#c4e8ef"]}
                />
                <PieChart
                    title={"Total Customers"}
                    value={3439}
                    series={[12, 25]}
                    colors={["#275BE8","#c4e8ef"]}
                />
                <PieChart
                    title={"Properties for Cities"}
                    value={834}
                    series={[73, 25]}
                    colors={["#275BE8","#c4e8ef"]}
                />
            </Box>

            <Stack mt="25px" width="100%" direction={{xs:"column",lg:"row"}}>
                <TotalRevenue />
                <PropertyReferrals />
            </Stack>
        </Box>
    )
}

export default Home
