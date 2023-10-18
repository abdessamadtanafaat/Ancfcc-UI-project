import { INavbarData } from "./helper"

export const navbarData: INavbarData[] =  [
    { 
        routerLink:'dashboard',
        icon: 'fal fa-home',
        label:'Tableau de Bord'
        // afficher des données et des statistiques globales sur les candidatures et les concours.y
    },
    { 
        routerLink:'gestionscandidatures',
        icon: 'fal fa-camera',
        label:'Gérer Candidatures '
    },
    { 
        routerLink:'mesCandidatures',
        icon: 'fal fa-tags',
        label:'Mes Candidatures',
        items : [ {
            routerLink:'mesCandidatures/list1',
            label:'list 1 candidatures'
            },

            {
            routerLink:'mesCandidatures/list1',
            label:'list 2 candidatures'
            },
            {
            routerLink:'mesCandidatures/list1',
            label:'list 3 candidatures'
            }
                ]
    },     
            { 
        routerLink:'statistiques',
        icon: 'fal fa-chart-bar',
        label:'Statistiques des Candidatures',
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