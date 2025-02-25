# Introduzione

L'applicazione è un'interfaccia per la gestione degli utenti di un forum. Utilizza React come libreria di sviluppo, Axios per interagire con un'API REST.

## Obiettivi

- Recuperare la lista degli utenti dal backend
- Consentire la creazione di nuovi utenti
- Permettere la modifica di un utente esistente
- Consentire l'eliminazione di un utente
- Fornire un'interfaccia utente accessibile e ben strutturata

## Struttura del Componente

Un generico componente gestisce:

- Lo stato degli utenti
- Il form per l'inserimento e la modifica
- Le operazioni CRUD (Create, Read, Update, Delete)
- La visualizzazione degli utenti in lista

## Funzionamento

Descrizione api: http://localhost:5000/apidocs

### Recupero della lista utenti


All'avvio del componente, viene effettuata una richiesta GET a `http://localhost:5000/users` per ottenere la lista degli utenti e aggiornarla nello stato.

### Creazione di un nuovo utente

Quando si invia il form senza un utente in modifica, viene effettuata una richiesta POST al server con i dati inseriti. Il nuovo utente viene aggiunto allo stato dell'applicazione.

### Modifica di un utente esistente

Selezionando un utente, i dati vengono caricati nel form e aggiornati con una richiesta PUT a `http://localhost:5000/users/{id}`. L'utente viene aggiornato nella lista senza necessità di ricaricare la pagina.

### Eliminazione di un utente

Cliccando il pulsante "Elimina", viene inviata una richiesta DELETE a `http://localhost:5000/users/{id}`. L'utente viene rimosso dallo stato dell'applicazione.
