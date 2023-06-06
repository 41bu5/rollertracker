import CardHolder from "@/Components/ClubPage/CardHolder";
import SectionHeader from "@/Components/SectionHeader/SectionHeader";
import Info from "@/Layouts/InfoLayout";
import { Head } from '@inertiajs/react';

/**
 * 
 * Página visible por todo tipo de clientes que permite el visionado y filtrado de
 * tarjetas con información de los clubes disponibles en la base de datos, además de proporcionar un
 * formulario para la solicitud de nuevas instancias.
 * 
 */
export default function ClubPage({ clubs }) {
    return (
        <Info>
            <Head title="Clubes" />
            <SectionHeader title={'Busca un club'} subtitle={'Descubre los clubs y alianzas de la liga.'} />
            <CardHolder clubs={clubs} />
        </Info>
    );
}