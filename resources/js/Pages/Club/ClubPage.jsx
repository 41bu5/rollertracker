import CardHolder from "@/Components/ClubPage/CardHolder";
import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import Info from "@/Layouts/InfoLayout";
import { Head } from '@inertiajs/react';

export default function ClubPage({ clubs }) {
    return (
        <Info>
            <Head title="Clubes" />
            <SectionHeader title={'Busca un club'} subtitle={'Descubre los clubs y alianzas de la liga.'} />
            <CardHolder clubs={clubs} />
        </Info>
    );
}