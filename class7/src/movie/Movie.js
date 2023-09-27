import { InformationAboutMovie } from "./InformationAboutMovie"; 
import { VisualInformationAboutMovie }from "./VisualInformationAboutMovie"; 

export const Movie = () => {
    return (
        <div>
            <InformationAboutMovie />
            <VisualInformationAboutMovie />
        </div>
    );
};