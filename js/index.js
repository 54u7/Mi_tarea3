const corp = document.querySelector('#cuerpo');

function cargar()
{
    fetch("http://www.raydelto.org/agenda.php")
    .then((respuesta) => {
        return respuesta.json();
    }).then((data) => {
        console.log(data);
        data.forEach(contact => {
            cuerpo.innerHTML += `
            <tr>
                <td>${contact.nombre}</td>
                <td>${contact.apellido}</td>
                <td>${contact.telefono}</td>
            </tr>
            
        `});
    })

}
