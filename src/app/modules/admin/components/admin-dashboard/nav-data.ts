import { INavbarData } from "./helper"

export const navbarData: INavbarData[] =  [
    { 
        routerLink:'/dashboard',
        icon: 'fa fa-tachometer',
        label:'Tableau de Bord'
        // afficher des données et des statistiques globales sur les candidatures et les concours.y
    },
    { 
        routerLink:'gestionscandidatures',
        icon: 'fa fa-cogs',
        label:'Gérer Candidatures '
    },
    { 
        routerLink:'mesCandidatures',
        icon: 'fa fa-folder',
        label:'Mes Candidatures',
        items : [ {
            routerLink:'mesCandidatures/acceptees',
            label:'Acceptées'
            },

            {
            routerLink:'mesCandidatures/refusees',
            label:'Refusée'
            },
            {
            routerLink:'mesCandidatures/revision',
            label:'A examiner'
            }
                ]
    },     
    { 
        routerLink:'statistiques',
        icon: 'fal fa-chart-bar',
        label:'Statistiques',
    },
    { 
        routerLink:'concours',
        icon: 'fal fa-file',
        label:'Concours',
    },
    { 
        routerLink:'settings',
        icon: 'fal fa-cog',
        label:'Settings'
    },

];