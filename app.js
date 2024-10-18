// Función para registrar el administrador
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Guardar los datos en localStorage
    localStorage.setItem('adminUsername', username);
    localStorage.setItem('adminPassword', password);

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html'; // Redirigir al login
});

// Función para iniciar sesión
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Obtener los datos de localStorage
    const storedUsername = localStorage.getItem('adminUsername');
    const storedPassword = localStorage.getItem('adminPassword');

    // Validar el login
    if (username === storedUsername && password === storedPassword) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = 'dashboard.html'; // Redirigir al panel de administrador
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// // Función para cerrar sesión
// document.getElementById('logoutBtn')?.addEventListener('click', function() {
//     alert('Has cerrado sesión.');
//     window.location.href = 'login.html'; // Redirigir al login
// });


// Función para registrar un nuevo plan
document.getElementById('planForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const planName = document.getElementById('plan-name').value;
    const planDuration = document.getElementById('duration').value;
    
    let plans = JSON.parse(localStorage.getItem('plans')) || [];
    const newPlan = {
        name: planName,
        duration: planDuration
    };
    
    plans.push(newPlan);
    localStorage.setItem('plans', JSON.stringify(plans));
    alert('Plan registrado exitosamente');
    document.getElementById('planForm').reset();
});


// function loadPlans() {
//     const plans = JSON.parse(localStorage.getItem('plans')) || [];
//     console.log(plans); // Agrega esto para depuración
//     const planSelect = document.getElementById('plan');
    
//     planSelect.innerHTML = '';

//     plans.forEach(plan => {
//         const option = document.createElement('option');
//         option.value = plan.name;
//         option.textContent = `${plan.name} - ${plan.duration} meses`;
//         planSelect.appendChild(option);
//     });
// }


// // Llamar a la función para cargar los planes al cargar la página
// window.onload = function() {
//     loadPlans();
//     displayClients(); // Mostrar la lista de clientes registrados al cargar la página
// };



// // Función para registrar clientes
// document.getElementById('clientForm')?.addEventListener('submit', function(event) {
//     event.preventDefault(); // Evitar el envío tradicional del formulario

//     // Obtener los valores del formulario
//     const documentId = document.getElementById('document').value;
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
//     const phone = document.getElementById('phone').value;
//     const gender = document.getElementById('gender').value;
//     const email = document.getElementById('email').value;
//     const selectedPlan = document.getElementById('plan').value;

//     // Obtener la duración del plan seleccionado desde LocalStorage
//     const plans = JSON.parse(localStorage.getItem('plans')) || [];
//     const selectedPlanData = plans.find(plan => plan.name === selectedPlan);
//     const duration = selectedPlanData ? parseInt(selectedPlanData.duration) : 0;

//     // Calcular la fecha de inicio y la fecha de finalización
//     const startDate = new Date();
//     const endDate = new Date();
//     endDate.setMonth(startDate.getMonth() + duration); // Sumar la duración en meses

//     // Crear un objeto para el nuevo cliente
//     const newClient = {
//         document: documentId,
//         name: firstName,
//         lastName: lastName,
//         phone: phone,
//         gender: gender,
//         email: email,
//         plan: selectedPlan,
//         startDate: startDate.toLocaleDateString(),
//         endDate: endDate.toLocaleDateString()
//     };

//     // Verificar si ya existen clientes en LocalStorage
//     let clients = JSON.parse(localStorage.getItem('clients')) || [];

//     // Añadir el nuevo cliente al array de clientes
//     clients.push(newClient);

//     // Guardar los clientes actualizados en LocalStorage
//     localStorage.setItem('clients', JSON.stringify(clients));

//     // Mensaje de confirmación
//     alert('Cliente registrado exitosamente');

//     // Limpiar el formulario
//     document.getElementById('clientForm').reset();
// });

// // Función para mostrar la lista de clientes registrados
// function displayClients() {
//     const clients = JSON.parse(localStorage.getItem('clients')) || []; // Obtener clientes de localStorage
//     const clientListContainer = document.getElementById('clientList');

//     clientListContainer.innerHTML = ''; // Limpiar cualquier contenido anterior

//     if (clients.length === 0) {
//         clientListContainer.innerHTML = '<p>No hay clientes registrados.</p>'; // Mensaje si no hay clientes
//     } else {
//         clients.forEach(client => {
//             const clientItem = document.createElement('div');
//             clientItem.classList.add('client-item'); // Añadir clase para estilo
//             clientItem.innerHTML = `
//                 <h3>Cliente: ${client.name} ${client.lastName}</h3>
//                 <p>Documento: ${client.document}</p>
//                 <p>Teléfono: ${client.phone}</p>
//                 <p>Sexo: ${client.gender}</p>
//                 <p>Correo: ${client.email}</p>
//                 <p>Plan: ${client.plan}</p>
//                 <p>Fecha de Inicio: ${client.startDate}</p>
//                 <p>Fecha de Finalización: ${client.endDate}</p>
//             `;
//             clientListContainer.appendChild(clientItem); // Añadir cliente al contenedor
//         });
//     }
// }

// // Llamar a la función para mostrar los clientes registrados al cargar la página
// window.onload = function() {
//     displayClients(); // Mostrar clientes al cargar la página
// };
