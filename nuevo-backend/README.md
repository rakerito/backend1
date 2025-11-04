<%- include("templates/header.ejs") %>  

    <h1 class="text-primary">Inicio</h1>

    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt odio commodi hic tempora dolore amet voluptatum eius adipisci dolor reiciendis alias accusamus, ducimus provident magnam facere, ea sed voluptatem nisi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tempore fuga. Molestiae sequi, accusantium dicta quaerat, perspiciatis rem id obcaecati consequatur deleniti voluptates praesentium aliquid. Assumenda velit officiis asperiores quibusdam?
    Vel qui velit natus provident fugit placeat ullam et eos. Voluptate laudantium itaque blanditiis, delectus numquam nobis, quas aperiam dolorem deserunt molestias natus dolores odio necessitatibus vel ratione alias voluptas.
    Rerum est illo maiores odit ab, quam accusantium dolore praesentium. Est temporibus ab sapiente quia omnis delectus natus voluptatem quis, pariatur voluptate praesentium molestias aliquid dolores blanditiis id similique? Cum?
    </p>

    <%
    var a = 5;
    var b = 10;
    var c = a + b;
    var texto = "Hola es el valor de una variable"
    %>

    <p>La suma de <%= a %> + <%= b %> = <%= c %></p>

    <a href="/info/<%= c %>/<%= texto %>">Enviar datos</a>

    <ul>
        <% artistas.forEach((artista)=>{ %>
            <li><%= artista %></li>
        <% }) %>    
    </ul>

    <div class="container">
    <table class="table table-bordered">
        <thead class="table-dark">
        <tr>
            <th>Artistas</th>
        </tr>
        </thead>
        <tbody>
        <% artistas.forEach((artista) => { %>
            <tr>
            <td><%= artista %></td>
            </tr>
        <% }) %>
        </tbody>
    </table>
    </div>


<%- include("templates/footer.ejs") %>
