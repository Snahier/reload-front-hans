import React, { useState } from "react"
import { LinksContainer } from "./styles"
import { Link } from "react-router-dom"
import biomarkerIconDefault from "../../../assets/navbar/biomarker_menu_icon.svg"
import biomarkerIconSelected from "../../../assets/navbar/biomarker_menu_icon_selected.svg"
import nutritionIconDefault from "../../../assets/navbar/nutrition_menu_icon.svg"
import nutritionIconSelected from "../../../assets/navbar/nutrition_menu_icon_selected.svg"
import lifestyleIconDefault from "../../../assets/navbar/lifestyle_menu_icon.svg"
import lifestyleIconSelected from "../../../assets/navbar/lifestyle_menu_icon_selected.svg"
import recommendationsIconDefault from "../../../assets/navbar/recommendations_menu_icon.svg"
import recommendationsIconSelected from "../../../assets/navbar/recommendations_menu_icon_selected.svg"

interface LinksProps {}

const Links: React.FC<LinksProps> = () => {
  const [biomarkerIcon, setBiomarkerIcon] = useState(biomarkerIconDefault)
  const [nutritionIcon, setNutritionIcon] = useState(nutritionIconDefault)
  const [lifestyleIcon, setLifestyleIcon] = useState(lifestyleIconDefault)
  const [recommendationsIcon, setRecommendationsIcon] = useState(
    recommendationsIconDefault
  )

  return (
    <LinksContainer>
      <li
        onMouseOver={() => setBiomarkerIcon(biomarkerIconSelected)}
        onMouseLeave={() => setBiomarkerIcon(biomarkerIconDefault)}
      >
        <Link to="/biomarkers">
          <img src={biomarkerIcon} alt="Nutrition" />
          Biomarkers
        </Link>
      </li>

      <li
        onMouseOver={() => setNutritionIcon(nutritionIconSelected)}
        onMouseLeave={() => setNutritionIcon(nutritionIconDefault)}
      >
        <Link to="/nutrition">
          <img src={nutritionIcon} alt="Nutrition" />
          Nutrition
        </Link>
      </li>

      <li
        onMouseOver={() => setLifestyleIcon(lifestyleIconSelected)}
        onMouseLeave={() => setLifestyleIcon(lifestyleIconDefault)}
      >
        <img src={lifestyleIcon} alt="Lifestyle" />
        <Link to="/lifestyle">Lifestyle</Link>
      </li>

      <li
        onMouseOver={() => setRecommendationsIcon(recommendationsIconSelected)}
        onMouseLeave={() => setRecommendationsIcon(recommendationsIconDefault)}
      >
        <img src={recommendationsIcon} alt="Recommendations" />
        <Link to="/recommendation">Recommendations</Link>
      </li>
    </LinksContainer>
  )
}
export default Links
