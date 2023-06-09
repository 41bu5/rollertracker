<?php

namespace Database\Seeders;

use App\Models\Club;
use Illuminate\Database\Seeder;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Club::factory(5)->create();
        Club::create([
            'name' => 'Las Judas',
            'c_autonoma' => 'Andalucía',
            'zona' => 'Málaga',
            'logo' => 'http://rollertracker.test/club-logos/las_judas.jpg',
            'web' => null,
            'email' => 'lasjudasmalaga.rd@gmail.com',
            'instagram' => 'https://www.instagram.com/lasjudasrd/?hl=es',
            'facebook' => 'https://www.facebook.com/LasJudasMalagaRD/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Despeñaperras',
            'c_autonoma' => 'Mezcla',
            'zona' => 'Málaga / Cáceres',
            'logo' => 'http://rollertracker.test/club-logos/despenaperras.jpg',
            'web' => null,
            'email' => 'Andaluciarollerderby@gmail.com',
            'instagram' => 'https://www.instagram.com/andaluciarollerderby/?ref=badge',
            'facebook' => 'https://www.facebook.com/Andaluciarollerderby/',
        ]);
        
        Club::create([
            'name' => 'La Granada Mecánica',
            'c_autonoma' => 'Andalucía',
            'zona' => 'Granada',
            'logo' => 'http://rollertracker.test/club-logos/granada_mecanica.jpg',
            'web' => null,
            'email' => 'lagranadamecanica@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbygranada/?hl=es',
            'facebook' => 'https://www.facebook.com/laGranadaMecanica',
        ]);
        
        Club::create([
            'name' => 'Sevilla Roller Derby',
            'c_autonoma' => 'Andalucía',
            'zona' => 'Sevilla',
            'logo' => 'http://rollertracker.test/club-logos/sevilla.jpg',
            'web' => null,
            'email' => null,
            'instagram' => 'https://www.instagram.com/sevilla.rollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/pages/category/sports-club/Sevilla-Roller-Derby-120062062721812/',
        ]);
        
        // Club::create([
        //     'name' => 'Las Sarrias',
        //     'c_autonoma' => 'Aragón',
        //     'zona' => 'Varias',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Sicarias del Cierzo',
            'c_autonoma' => 'Aragón',
            'zona' => 'Zaragoza',
            'logo' => 'http://rollertracker.test/club-logos/sicarias_cierzo.jpg',
            'web' => null,
            'email' => null,
            'instagram' => 'https://www.instagram.com/zaragozarollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderbyzgz/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'La Güestia',
            'c_autonoma' => 'Asturias',
            'zona' => 'Varias',
            'logo' => 'http://rollertracker.test/club-logos/guestia.jpg',
            'web' => null,
            'email' => 'laguestia.info@gmail.com',
            'instagram' => 'https://www.instagram.com/laguestiarollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/asturiesrollerderby/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Ses Bèsties',
            'c_autonoma' => 'Islas Baleares',
            'zona' => 'Palma de Mallorca',
            'logo' => 'http://rollertracker.test/club-logos/ses_besties.jpg',
            'web' => null,
            'email' => 'rollerderbymallorca@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbymallorca/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderbymallorca',
        ]);
        
        // Club::create([
        //     'name' => 'Talaotiks',
        //     'c_autonoma' => 'Islas Baleares',
        //     'zona' => 'Menorca',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Las Palmas Roller Derby',
            'c_autonoma' => 'Islas Canarias',
            'zona' => 'Gran Canaria',
            'logo' => 'http://rollertracker.test/club-logos/las_palmas.jpg',
            'web' => null,
            'email' => 'laspalmasrd@gmail.com',
            'instagram' => 'https://www.instagram.com/laspalmasrollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/laspalmasrollerderby/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Tenerife Roller Derby',
            'c_autonoma' => 'Islas Canarias',
            'zona' => 'Tenerife',
            'logo' => 'http://rollertracker.test/club-logos/tenerife.jpg',
            'web' => null,
            'email' => 'rollerderbytenerife@gmail.com',
            'instagram' => 'https://www.instagram.com/teneriferollerderby/',
            'facebook' => 'https://es-es.facebook.com/teneriferollerderby/',
        ]);
        
        // Club::create([
        //     'name' => 'Vulcano Derby Girls',
        //     'c_autonoma' => 'Islas Canarias',
        //     'zona' => 'Tenerife',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Cantabria Roller Derby',
            'c_autonoma' => 'Cantabria',
            'zona' => 'Varias',
            'logo' => 'http://rollertracker.test/club-logos/cantabria.jpg',
            'web' => null,
            'email' => 'cantabria.rollerderby@gmail.com',
            'instagram' => 'https://www.instagram.com/cantabria_rollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/people/Cantabria-Roller-Derby/100063444087005/',
        ]);
        
        Club::create([
            'name' => 'Kinkicharras',
            'c_autonoma' => 'Castilla y León',
            'zona' => 'Salamanca',
            'logo' => 'http://rollertracker.test/club-logos/kinkicharras.jpg',
            'web' => null,
            'email' => 'rollerderbysalamanca@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbysalamanca/?hl=es',
            'facebook' => 'https://www.facebook.com/KinkicharrasRollerDerbySalamanca/',
        ]);
        
        // Club::create([
        //     'name' => 'Burgos Roller Derby',
        //     'c_autonoma' => 'Castilla y León',
        //     'zona' => 'Burgos',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Barcelona Roller Derby',
            'c_autonoma' => 'Cataluña',
            'zona' => 'Barcelona',
            'logo' => 'http://rollertracker.test/club-logos/barcelona.jpg',
            'web' => null,
            'email' => 'coordinacion.brd@gmail.com',
            'instagram' => 'https://www.instagram.com/barcelonarollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/barcelonarollerderbyRD/?locale=es',
        ]);
        
        Club::create([
            'name' => "Bad'n'Rollers",
            'c_autonoma' => 'Cataluña',
            'zona' => 'Badalona',
            'logo' => 'http://rollertracker.test/club-logos/badnrollers.jpg',
            'web' => null,
            'email' => 'rollerderbybadalona@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderby_badalona/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderbybadalona/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Insubmises',
            'c_autonoma' => 'Cataluña',
            'zona' => 'Reus',
            'logo' => 'http://rollertracker.test/club-logos/insubmises.jpg',
            'web' => null,
            'email' => 'insubmises.rdr@gmail.com',
            'instagram' => 'https://www.instagram.com/reusrollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/InsubmisesRdR/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Mediterranean Rollers',
            'c_autonoma' => 'Cataluña',
            'zona' => 'Barcelona',
            'logo' => 'http://rollertracker.test/club-logos/mediterranean_rollers.jpg',
            'web' => null,
            'email' => 'mediterranean.rollers@gmail.com',
            'instagram' => 'https://www.instagram.com/mediterranean.rollers/?hl=es',
            'facebook' => 'https://www.facebook.com/mediterranean.rollers/',
        ]);
        
        Club::create([
            'name' => 'Destroyer Dolls',
            'c_autonoma' => 'Extremadura',
            'zona' => 'Cáceres',
            'logo' => 'http://rollertracker.test/club-logos/destroyer_dolls.jpg',
            'web' => null,
            'email' => 'caceresrollerderby@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbycaceres/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderby.caceres/?locale=es_ES',
        ]);
        
        // Club::create([
        //     'name' => 'As Lobas de Morgana',
        //     'c_autonoma' => 'Galicia',
        //     'zona' => 'Ourense',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Jabatas',
            'c_autonoma' => 'Galicia',
            'zona' => 'Ourense',
            'logo' => 'http://rollertracker.test/club-logos/jabatas.png',
            'web' => null,
            'email' => 'jabatasrollerderby@hotmail.com',
            'instagram' => 'https://www.instagram.com/jabatasrollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/jabatasrollerderby',
        ]);
        
        Club::create([
            'name' => 'Irmandiñas',
            'c_autonoma' => 'Galicia',
            'zona' => 'A Coruña',
            'logo' => 'http://rollertracker.test/club-logos/irmandinas.jpg',
            'web' => null,
            'email' => 'irmandinasrd@gmail.com',
            'instagram' => 'https://www.instagram.com/irmandinasrollerderby/',
            'facebook' => 'https://www.facebook.com/irmandinasrd/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Sereas Bravas',
            'c_autonoma' => 'Galicia',
            'zona' => 'Vigo',
            'logo' => 'http://rollertracker.test/club-logos/sereas_bravas.jpg',
            'web' => null,
            'email' => 'vigorollerderbyoficial@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbyvigo/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderbyvigo/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'As Brigantias',
            'c_autonoma' => 'Galicia',
            'zona' => 'A Coruña',
            'logo' => 'http://rollertracker.test/club-logos/brigantias.jpg',
            'web' => 'https://brigantias.com',
            'email' => 'uneteasbrigantias@gmail.com',
            'instagram' => 'https://www.instagram.com/asbrigantiasrollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/As.Brigantias.Roller.Derby/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Negra Sombra',
            'c_autonoma' => 'Galicia',
            'zona' => 'Pontevedra',
            'logo' => 'http://rollertracker.test/club-logos/negra_sombra.jpg',
            'web' => null,
            'email' => 'negrasombrarollerderby@gmail.com',
            'instagram' => 'https://www.instagram.com/negra_sombra_roller_derby/?hl=es',
            'facebook' => 'https://www.facebook.com/negrasombrarollerderby/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Lobishomes',
            'c_autonoma' => 'Galicia',
            'zona' => 'Vigo',
            'logo' => 'http://rollertracker.test/club-logos/lobishomes.jpg',
            'web' => null,
            'email' => 'lobishomes.mrd@gmail.com',
            'instagram' => 'https://www.instagram.com/lobishomesmrd/',
            'facebook' => 'https://www.facebook.com/lobishomesrollerderby/?locale=es_ES',
        ]);
        
        // Club::create([
        //     'name' => 'Castañeiras',
        //     'c_autonoma' => 'Galicia',
        //     'zona' => 'Lugo',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        // Club::create([
        //     'name' => 'Team Galiza',
        //     'c_autonoma' => 'Galicia',
        //     'zona' => 'Varias',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Black Thunders',
            'c_autonoma' => 'Madrid',
            'zona' => 'Madrid',
            'logo' => 'http://rollertracker.test/club-logos/black_thunders.jpg',
            'web' => 'https://blackthundersrollerderby.wordpress.com',
            'email' => 'bienvenida.blackthunders@gmail.com',
            'instagram' => 'https://www.instagram.com/blackthundersderbydames/?hl=es',
            'facebook' => 'https://www.facebook.com/BlackThundersDerbyDamesMadrid/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Roller Derby Madrid',
            'c_autonoma' => 'Madrid',
            'zona' => 'Madrid',
            'logo' => 'http://rollertracker.test/club-logos/madrid.jpg',
            'web' => 'https://www.rollerderbymadrid.com',
            'email' => 'reclutamiento@rollerderbymadrid.com',
            'instagram' => 'https://www.instagram.com/rollerderbymadrid/?hl=es',
            'facebook' => 'https://www.facebook.com/rollerderbymadrid/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Madriders',
            'c_autonoma' => 'Madrid',
            'zona' => 'Madrid',
            'logo' => 'http://rollertracker.test/club-logos/madriders.jpg',
            'web' => 'https://madriders.es',
            'email' => 'madridersrd@gmail.com',
            'instagram' => null,
            'facebook' => 'https://www.facebook.com/madridersrollerderby/',
        ]);
        
        // Club::create([
        //     'name' => 'Destroyer Kinkis',
        //     'c_autonoma' => 'Mezcla',
        //     'zona' => 'Murcia / Salamanca',
        //     'logo' => 'https://picsum.photos/200',
        //     'web' => null,
        //     'email' => null,
        //     'instagram' => null,
        //     'facebook' => null,
        // ]);
        
        Club::create([
            'name' => 'Piperrakas del Norte',
            'c_autonoma' => 'Mezcla',
            'zona' => 'La Rioja / País Vasco',
            'logo' => 'http://rollertracker.test/club-logos/piperrakas.jpeg',
            'web' => null,
            'email' => null,
            'instagram' => null,
            'facebook' => null,
        ]);
        
        Club::create([
            'name' => 'Roller Derby Murcia',
            'c_autonoma' => 'Murcia',
            'zona' => 'Murcia',
            'logo' => 'http://rollertracker.test/club-logos/murcia.jpg',
            'web' => 'https://rollerderbymurcia.wixsite.com/rollerderbymurcia',
            'email' => 'rocknrollerderbymurcia@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbymurcia/?hl=es',
            'facebook' => 'https://www.facebook.com/Rollerderbymurcia/?locale=es_LA',
        ]);
        
        Club::create([
            'name' => 'Nafarriors',
            'c_autonoma' => 'Navarra',
            'zona' => 'Pamplona',
            'logo' => 'http://rollertracker.test/club-logos/nafarriors.jpg',
            'web' => null,
            'email' => 'rollerderbyiruna@gmail.com',
            'instagram' => 'https://www.instagram.com/nafarriors.rollerderby/',
            'facebook' => 'https://www.facebook.com/rollerderbynavarra?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Easo Avengers',
            'c_autonoma' => 'País Vasco',
            'zona' => 'Donosti',
            'logo' => 'http://rollertracker.test/club-logos/easo_avengers.jpeg',
            'web' => null,
            'email' => 'easoavengers@gmail.com',
            'instagram' => 'https://www.instagram.com/easoavengers/?hl=es',
            'facebook' => null,
        ]);
        
        Club::create([
            'name' => 'Botxo Killers',
            'c_autonoma' => 'País Vasco',
            'zona' => 'Bilbao',
            'logo' => 'http://rollertracker.test/club-logos/botxo_killers.png',
            'web' => null,
            'email' => 'bilbaorollerderby@gmail.com',
            'instagram' => 'https://www.instagram.com/bilborollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/bilborollerderby/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Uluka',
            'c_autonoma' => 'País Vasco',
            'zona' => 'Álava',
            'logo' => 'http://rollertracker.test/club-logos/uluka.jpg',
            'web' => null,
            'email' => null,
            'instagram' => 'https://www.instagram.com/uluka_rollerderby/?hl=es',
            'facebook' => null,
        ]);
        
        Club::create([
            'name' => 'Las Gildas',
            'c_autonoma' => 'La Rioja',
            'zona' => 'Varias',
            'logo' => 'http://rollertracker.test/club-logos/las_gildas.jpg',
            'web' => null,
            'email' => 'rollerderbyrioja@gmail.com',
            'instagram' => 'https://www.instagram.com/rollerderbyrioja/',
            'facebook' => 'https://www.facebook.com/rollerderbyrioja/?locale=es_ES',
        ]);
        
        Club::create([
            'name' => 'Roller Derby Valencia',
            'c_autonoma' => 'Comunidad Valenciana',
            'zona' => 'Valencia',
            'logo' => 'http://rollertracker.test/club-logos/valencia.jpg',
            'web' => null,
            'email' => 'valenciaderbygirls@gmail.com',
            'instagram' => 'https://www.instagram.com/valenciarollerderby/?hl=es',
            'facebook' => 'https://www.facebook.com/RayoDockers/',
        ]);
    }
}
