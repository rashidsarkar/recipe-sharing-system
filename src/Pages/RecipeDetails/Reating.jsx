import { useEffect, useState, useCallback } from "react";
import axiosInstancePublic from "../../AxiosApi/axiosInstancePublic";
import useAuth from "../../hooks/useAuth";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Rating } from "@material-tailwind/react";

function Reating({ recipeSingleData }) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const idx = recipeSingleData._id;

  // Function to fetch the current rating from the database
  const fetchRating = useCallback(async () => {
    try {
      const response = await axiosInstancePublic.get(`/api/rating/${idx}`, {
        params: { email: user.email },
      });
      if (response.data && response.data.rating) {
        setRating(response.data.rating);
      }
    } catch (error) {
      console.error("Error fetching rating from the database", error);
      setError("Error fetching rating");
    } finally {
      setLoading(false);
    }
  }, [idx, user.email]);

  // Fetch the current rating when the component mounts
  useEffect(() => {
    fetchRating();
  }, [fetchRating]);

  // Function to handle rating change
  const handleRatingChange = async (newRating) => {
    setRating(newRating);
    console.log(newRating);
    try {
      await axiosInstancePublic.post("/api/rating", {
        recipeId: idx,
        email: user.email,
        rating: newRating,
      });
    } catch (error) {
      console.error("Error sending rating to the database", error);
      setError("Error sending rating");
    }
  };

  if (loading) return <CustomLoading />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <>
      <p className="flex items-center">
        <strong>My Rating:</strong>
        <div className="rating">
          <Rating value={rating} onChange={handleRatingChange} />
        </div>
      </p>
    </>
  );
}

export default Reating;
