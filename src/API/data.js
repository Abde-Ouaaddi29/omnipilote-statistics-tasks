export const tickets = [
  {
    type: "Maintenance",
    numeroTicket: "T001",
    numeroSerie: "SN001",
    designation: "Problème d'imprimante",
    client: "Société A",
    dateOuverture: "2024-01-01", // Date of creation
    SLA: 2, // SLA in days
    dureeAppel: 45, // Call duration in minutes
    dateAffectation: "2024-01-02", // Date assigned to a technician
    compteurMono: 150,
    compteurCouleur: 30,
    statut: "Fermé", // Status of the ticket
    dateFermeture: "2024-01-04", // Date of closure
    dureeTicket: 3, // Duration in days
    technicien: "Said",
    tauxSLA: 100 // SLA percentage met
  },
  {
    type: "Réseau",
    numeroTicket: "T002",
    numeroSerie: "SN002",
    designation: "Problème de routeur",
    client: "Société B",
    dateOuverture: "2024-10-15",
    SLA: 1,
    dureeAppel: 30,
    dateAffectation: "2024-11-05",
    compteurMono: 200,
    compteurCouleur: 50,
    statut: "Ouvert",
    dateFermeture: null,
    dureeTicket: null,
    technicien: "Ali",
    tauxSLA: null
  },
  {
    type: "Logiciel",
    numeroTicket: "T003",
    numeroSerie: "SN003",
    designation: "Mise à jour du logiciel",
    client: "Société C",
    dateOuverture: "2024-01-01",
    SLA: 3,
    dureeAppel: 60,
    dateAffectation: "2024-01-11",
    compteurMono: 250,
    compteurCouleur: 80,
    statut: "Fermé",
    dateFermeture: "2024-01-12",
    dureeTicket: 2,
    technicien: "Omar",
    tauxSLA: 100
  },
  {
    type: "Sécurité",
    numeroTicket: "T004",
    numeroSerie: "SN004",
    designation: "Problème de pare-feu",
    client: "Société D",
    dateOuverture: "2024-01-16",
    SLA: 2,
    dureeAppel: 20,
    dateAffectation: "2024-01-16",
    compteurMono: 180,
    compteurCouleur: 40,
    statut: "Fermé",
    dateFermeture: "2024-02-17",
    dureeTicket: 2,
    technicien: "Fatima",
    tauxSLA: 100
  },
  {
    type: "Infrastructure",
    numeroTicket: "T005",
    numeroSerie: "SN005",
    designation: "Problème de serveur",
    client: "Société E",
    dateOuverture: "2024-10-15",
    SLA: 5,
    dureeAppel: 90,
    dateAffectation: "2024-01-16",
    compteurMono: 300,
    compteurCouleur: 60,
    statut: "Ouvert",
    dateFermeture: null,
    dureeTicket: null,
    technicien: "Hassan",
    tauxSLA: null
  },
  {
    type: "Matériel",
    numeroTicket: "T006",
    numeroSerie: "SN006",
    designation: "Remplacement de matériel",
    client: "Société F",
    dateOuverture: "2023-01-22",
    SLA: 3,
    dureeAppel: 50,
    dateAffectation: "2023-01-23",
    compteurMono: 210,
    compteurCouleur: 55,
    statut: "Fermé",
    dateFermeture: "2023-01-30",
    dureeTicket: 2,
    technicien: "Nadia",
    tauxSLA: 100
  },
  {
    type: "Assistance",
    numeroTicket: "T007",
    numeroSerie: "SN007",
    designation: "Assistance technique",
    client: "Société G",
    dateOuverture: "2023-01-25",
    SLA: 1,
    dureeAppel: 30,
    dateAffectation: "2023-01-25",
    compteurMono: 120,
    compteurCouleur: 35,
    statut: "Fermé",
    dateFermeture: "2023-01-26",
    dureeTicket: 1,
    technicien: "Amine",
    tauxSLA: 100
  },
  {
    type: "Formation",
    numeroTicket: "T008",
    numeroSerie: "SN008",
    designation: "Formation utilisateur",
    client: "Société H",
    dateOuverture: "2024-07-27",
    SLA: 7,
    dureeAppel: 120,
    dateAffectation: "2024-07-28",
    compteurMono: 300,
    compteurCouleur: 80,
    statut: "Ouvert",
    dateFermeture: null,
    dureeTicket: null,
    technicien: "Zara",
    tauxSLA: null
  },
  {
    type: "Upgrade",
    numeroTicket: "T009",
    numeroSerie: "SN009",
    designation: "Mise à niveau de l'application",
    client: "Société I",
    dateOuverture: "2024-02-01",
    SLA: 4,
    dureeAppel: 75,
    dateAffectation: "2024-03-30",
    compteurMono: 250,
    compteurCouleur: 70,
    statut: "Fermé",
    dateFermeture: "2024-02-11",
    dureeTicket: 3,
    technicien: "Samir",
    tauxSLA: 100
  },
  {
    type: "Installation",
    numeroTicket: "T010",
    numeroSerie: "SN010",
    designation: "Installation de nouveaux équipements",
    client: "Société J",
    dateOuverture: "2024-10-16",
    SLA: 2,
    dureeAppel: 100,
    dateAffectation: "2024-05-03",
    compteurMono: 220,
    compteurCouleur: 60,
    statut: "Ouvert",
    dateFermeture: null,
    dureeTicket: null,
    technicien: "Rachid",
    tauxSLA: null
  }
];


// Exemple de calcul des statistiques

// const statistiques = {
//   ticketsCrees: tickets.length,
//   ticketsFermes: tickets.filter(ticket => ticket.statut === "Fermé").length,
//   ticketsOuverts: tickets.filter(ticket => ticket.statut === "Ouvert").length,
//   dureeMoyenneTickets: (
//     tickets
//       .filter(ticket => ticket.statut === "Fermé")
//       .reduce((somme, ticket) => somme + ticket.dureeTicket, 0) /
//     tickets.filter(ticket => ticket.statut === "Fermé").length
//   ).toFixed(2),
//   statistiquesTechnicien: {
//     "Said": {
//       interventionsFermees: tickets.filter(ticket => ticket.technicien === "Said" && ticket.statut === "Fermé").length,
//       dureeMoyenne: (
//         tickets
//           .filter(ticket => ticket.technicien === "Said" && ticket.statut === "Fermé")
//           .reduce((somme, ticket) => somme + ticket.dureeTicket, 0) /
//         tickets.filter(ticket => ticket.technicien === "Said" && ticket.statut === "Fermé").length
//       ).toFixed(2)
//     }
//   }
// };

// console.log(statistiques);