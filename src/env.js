// Aggiungere le variabili di ambiente necessarie
function confEnv(window){
    let env = window.env || {};
    window.env = {
        ...env,
        base_api: '${BASE_API}'
    }
}
confEnv(this)

