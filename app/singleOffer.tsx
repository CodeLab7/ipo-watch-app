import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useEffect, useState} from "react";
import {SINGLE_SME_IPO_API} from "@/api/sme";
import {SmeIpoData} from "@/types/smeipo.interface";

const SingleOffer = () => {
    const params = useLocalSearchParams();
    const {id} = params;
    console.log("id", id)

    const fetchEpisodes = async() => {
        const response = await SINGLE_SME_IPO_API(id);
        console.log("response",response)
    };
    useEffect(() => {
        fetchEpisodes();
    }, [])
    return (
        <ThemedView>
            <ThemedText>Hello{id}</ThemedText>
        </ThemedView>
    )
}
export default SingleOffer