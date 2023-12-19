import prismicClient from "../../../utils/prismic";
import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "../Projects/styles/styled";
import { onPageView } from "../../../utils/googleAna";
import { EPageNames, EWindowTypes } from "../../../interfaces/types";
import Icon from "../../Icons/Index";
import Loading from "../../Spinners/Spinner";

interface IPropsImagePage {
    data: any;
}

const ImagesPage: FunctionComponent<IPropsImagePage> = ({ data }) => {
    const [selectedIcon, setSelectedIcon] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [projects, setProjects] = useState<any | null>(null);

    const getAndSetProjects = async () => {
        try {
            const prismicDocs = await prismicClient.getAllByTag("3d");
            setProjects(prismicDocs);
            setIsLoading(false);
        }catch (error: any){
            console.log(error.response);
        }
    };


    useEffect(()=> {
        getAndSetProjects();
    }, []);

    return (
        <Container>

        </Container>
    )
}

