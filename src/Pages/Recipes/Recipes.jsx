import useRecipesApi from "../../RecipesApi/useRecipesApi";
import CustomLoading from "../../components/CustomLoading/CustomLoading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import RecipesCard from "../../components/RecipesComponents/RecipesCard/RecipesCard";

function Recipes() {
  const { recipesData, error, isError, isLoading } = useRecipesApi();
  if (isLoading) return <CustomLoading />;
  if (isError) return <ErrorMessage error={error} />;
  // console.log(recipesData);

  return (
    <div className="grid grid-cols-3">
      {recipesData &&
        recipesData.map((recipe) => (
          <RecipesCard key={recipe._id} recipe={recipe} />
        ))}
    </div>
  );
}

export default Recipes;
