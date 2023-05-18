import CardHolder from "@/Components/ClubPage/CardHolder";
import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import Info from "@/Layouts/InfoLayout";
import { Head } from '@inertiajs/react';

export default function ClubPage({ clubs }) {
    return (
        <Info>
            <Head title="Busca tu club" />
            <SectionHeader title={'Busca tu club'} subtitle={'Descubre los clubs de la liga ARDE.'} />
            <CardHolder clubs={clubs} />
        </Info>
    );
}