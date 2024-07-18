import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
const Listings: React.FC = () => {
  const [listings, setListings] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("/api/listings")
      .then((response) => setListings(response.data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Available Strollers
      </Typography>
      <Grid container spacing={3}>
        {listings.map((listing) => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card>
              <CardMedia
                component="img"
                alt={listing.name}
                height="140"
                image={listing.image || "path/to/placeholder.jpg"}
              />
              <CardContent>
                <Typography variant="h5">{listing.name}</Typography>
                <Typography variant="body2">{listing.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Listings;
