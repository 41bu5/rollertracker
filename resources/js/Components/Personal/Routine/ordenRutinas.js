export function ordenAlfabetico(rutinas) {
    return rutinas.sort((a, b) => a.title.localeCompare(b.title));
}