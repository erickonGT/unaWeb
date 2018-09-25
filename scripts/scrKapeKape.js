var opcionMenuActiva = '';
var filtroActivo = '';

var ordenMesa = [];

var menuPrincipal = [
  {codigo: 1, nombre: 'ENTRADAS', nombreInterno: 'Entrada'},
  {codigo: 2, nombre: 'PLATOS PRINCIPALES', nombreInterno: 'PlatoPrincipal'},
  {codigo: 3, nombre: 'BEBIDAS', nombreInterno: 'Bebida'},
  {codigo: 4, nombre: 'POSTRES', nombreInterno: 'Postre'},
  {codigo: 5, nombre: 'ACOMPAÑAMIENTOS', nombreInterno: 'Acompaniamiento'},
];

var categorias = [
  {codigo: 1, nombre: 'Entradas Dulces', nombreCorto: 'Dulces', opcionMenu: 1},
  {codigo: 2, nombre: 'Entradas Saladas', nombreCorto: 'Saladas', opcionMenu: 1},
  {codigo: 3, nombre: 'Platos Principales Aves', nombreCorto: 'Aves', opcionMenu: 2},
  {codigo: 4, nombre: 'Platos Principales Cerdo', nombreCorto: 'Cerdo', opcionMenu: 2},
  {codigo: 5, nombre: 'Platos Principales Mariscos', nombreCorto: 'Mariscos', opcionMenu: 2},
  {codigo: 6, nombre: 'Platos Principales Res', nombreCorto: 'Res', opcionMenu: 2},
  {codigo: 7, nombre: 'Platos Principales Vegetariano', nombreCorto: 'Vegetariano', opcionMenu: 2},
  {codigo: 8, nombre: 'Bebidas Frias', nombreCorto: 'Frias', opcionMenu: 3},
  {codigo: 9, nombre: 'Bebidas Calientes', nombreCorto: 'Calientes', opcionMenu: 3},
  {codigo: 10, nombre: 'Cervezas', nombreCorto: 'Cervezas', opcionMenu: 3},
  {codigo: 11, nombre: 'Bebidas Alcoholicas', nombreCorto: 'Licores', opcionMenu: 3},
];

var entradasDulces = [
    { codigo: 101, imagen: 'imagenes/tacoChino.jpeg', nombre: 'taco chino', descripcion: 'taco de banano estilo chino', precio: 5.00 },
    { codigo: 102, imagen: 'imagenes/gelatina.jpeg', nombre: 'gelatina', descripcion: 'porcion de gelatina diferentes sabores', precio: 7.50 },
    { codigo: 103, imagen: 'imagenes/torreja.jpeg', nombre: 'torreja', descripcion: 'torreja con miel', precio: 7.50 }];

var entradaSalada = [
    { codigo: 201, imagen: 'imagenes/jamon.jpg', nombre: 'Jamon Queso', descripcion: 'rodaja de jamon, acompa�ada de queso derretido y una pieza de pan tostado', precio: 7.50 },
    { codigo: 202, imagen: 'imagenes/chuchito.jpeg', nombre: 'chuchito', descripcion: 'chuchito de pollo con queso duro', precio: 10.00 },
    { codigo: 203, imagen: 'imagenes/tacos.jpeg', nombre: 'taco', descripcion: 'taco de cerdo con queso duro y salsa de tomate', precio: 10.00 },
    { codigo: 204, imagen: 'imagenes/mortadela.jpg', nombre: 'mortadela', descripcion: 'rodaja de mortadela, acompa�ada de queso derretido y una pieza de pan tostado', precio: 7.50 },
    { codigo: 205, imagen: 'imagenes/carpaccioSalmon.jpeg', nombre: 'carpaccio de salmon', descripcion: 'fino salmon acompa�ado de alcaparras y aceitunas', precio: 35.00 }];

var PlatoPrincipalAves = [
    { codigo: 301, imagen: 'imagenes/polloCrema.jpeg', nombre: 'Pollo en crema ', descripcion: 'Tierno filete de pollo cocinado en nuestra salsa especial de champiñones', precio: 70.00 },
    { codigo: 302, imagen: 'imagenes/cackik.jpeg', nombre: 'cackik', descripcion: 'Delicioso caldo de chompipe, con el sabor tradicional del altiplano chapin', precio: 99.50 },
    { codigo: 303, imagen: 'imagenes/caldoPata.jpeg', nombre: 'caldoPata', descripcion: 'Sabrosa combinacion de pata de res, verduras, especias. Para un buen apetito.', precio: 79.99 },
    { codigo: 304, imagen: 'imagenes/patoNaranja.jpeg', nombre: 'patoNaranja', descripcion: 'Generosa porción de pato cocinado en la mas deliciosa salsa a base de naranja y especias de la casa.', precio: 97.55 },
    { codigo: 305, imagen: 'imagenes/patoPekines.jpeg', nombre: 'patoPekines', descripcion: 'Pato dorado al estilo oriental, aderezado con salsa pekinesa', precio: 88.70 }
];

var PlatoPrincipalCerdo = [
    { codigo: 401, imagen: 'imagenes/chuleta.jpg', nombre: 'chuleta', descripcion: 'chuleta de cerdo, acompa�ada de arroz y ensalada', precio: 99.55 },
    { codigo: 402, imagen: 'imagenes/costilla en barbacoa.jpeg', nombre: 'costilla en barbacoa', descripcion: 'costilla de cerdo acompa�ada, de papitas fritas y arroz', precio: 85.99 },
    { codigo: 403, imagen: 'imagenes/costillaen salsa verde.jpg', nombre: 'costillaen salsa verde', descripcion: 'costilla en ensalada verde, acompa�ada de perejil y arroz', precio: 85.99 }
];

var platoPrincipalMariscos = [
    { codigo: 501, imagen: 'imagenes/imarisco.jpeg', nombre: 'Pescado Frito', descripcion: 'Pargo del día deliciosamente dorado, acompañado de salsa a base de hierbas y limón', precio: 70.50 },
    { codigo: 502, imagen: 'imagenes/camaron.jpg', nombre: 'Camarones Empanizados', descripcion: 'Deliciosos camarones empanizados con la receta del chef, aderezados con salsa de la casa a base de perejil', precio: 90.25 },
    { codigo: 503, imagen: 'imagenes/carpaccioSalmon.jpeg', nombre: 'Carpaccio de Salmón', descripcion: 'Lascas de fresco Salmón chileno, aceitunas, alcaparras, pimientos y un toque de pimienta blanca', precio: 69.99}
];

var platoPrincipalRes = [];
var platoPrincipalVegetariano = [];
var bebidaCaliente = [];
var bebidaFria = [];
var bebidaCerveza = [];
var bebidaLicor = [];

function init() {
  var i;
  var posicion = 0;
  var objFiltro;
  var strMenuPrincipal = '';
  var objMenuPrincipal = document.getElementById('tdMenuPrincipal')
  var strHerramientas = '';
  var objHerramientas = document.getElementById('herramientas');

  strHerramientas += '<tr>';

  for (i = 0; i < menuPrincipal.length; i++){
    objFiltro = filtrosCategoria (menuPrincipal[i].codigo, menuPrincipal[i].nombreInterno, posicion);
    strHerramientas += objFiltro.strFiltro;
    posicion = objFiltro.posicion;
    strMenuPrincipal += '<tr><td><input id="bt' + menuPrincipal[i].nombreInterno + '" type="button" class="opcionMenuPrincipal" value="' + menuPrincipal[i].nombre + '" onclick="mostrarFiltro(' + i + ', \'' + menuPrincipal[i].nombreInterno + '\', \'' + objFiltro.primerRadio + '\', \'bt' + menuPrincipal[i].nombreInterno + '\')" /></td></tr>';
  }

  objHerramientas.innerHTML = strHerramientas + '</tr>';
  objMenuPrincipal.innerHTML = strMenuPrincipal;
}

function filtrosCategoria (opcionMenu, opcionMenuNombre, posicion){
  var i;
  var objFiltro = {posicion: 0, strFiltro: '<td id="tdFiltro' + opcionMenuNombre + '" hidden="true">', primerRadio: ''};

  for (i = posicion; i < categorias.length; i++){
      if (categorias[i].opcionMenu == opcionMenu){
        if (i == posicion){
           objFiltro.primerRadio = 'rd' + categorias[i].nombreCorto;
        }
        objFiltro.strFiltro += '<label for="rd' + categorias[i].nombreCorto + '">' + categorias[i].nombreCorto + '</label>';
        objFiltro.strFiltro += '<input id="rd' + categorias[i].nombreCorto + '" type="radio" name="filtro' + opcionMenuNombre + '" onclick="mostrarPlatos(' + categorias[i].codigo + ')" />'
      }
      else {
        objFiltro.posicion = i;
        i = categorias.length + 10;
      }
  }

  objFiltro.strFiltro += '</td>';
  return objFiltro;
}

function mostrarPlatos(prmOpcion) {
    var arreglo = [];
    var i = 0;
    var strHTML = '<table style="width:100%;"><tr></tr></table>';

    switch (prmOpcion) {
        case 1:
            arreglo = entradasDulces;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Entradas Dulces</td></tr>';
            break;
        case 2:
            arreglo = entradaSalada;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Entradas Saladas</td></tr>';
            break;
        case 3:
            arreglo = PlatoPrincipalCerdo;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Platos Principales con Carne de Cerdo</td></tr>';
            break;
        case 4:
            arreglo = PlatoPrincipalAves;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Platos Principales con Carne de Ave</td></tr>';
            break;
        case 5:
            arreglo = platoPrincipalMariscos;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Platos Principales con Mariscos</td></tr>';
            break;
        case 6:
            arreglo = platoPrincipalRes;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Platos Principales con Carne de Res</td></tr>';
            break;
        case 7:
            arreglo = platoPrincipalVegetariano;
            strHTML += '<table style="width:100%;"><tr><td>No hay platos asociados a Platos Principales Vegetarianos</td></tr>';
            break;
    }

if (arreglo.length > 0){
    strHTML = '<table style="width:100%;"><tr>';

    for (i = 0; i < arreglo.length; i++)
    {
        strHTML += '<td style="width:25%; vertical-align:top;"><table class="plato">';
        strHTML += '<tr><td colspan="2" style="width:125px; height:100px; align="center"><img src="' + arreglo[i].imagen + '" height="42" width="42"></td></tr>';
        strHTML += '<tr class="filaNombre"><td>' + arreglo[i].nombre + '</td>' + '<td>' + arreglo[i].precio + '</td></tr>';
        strHTML += '<tr><td colspan="2">' + arreglo[i].descripcion + '</td></tr>';
        strHTML += '<tr><td colspan="2" align="center"> <input id="Button1" type="button" value="agregar" class="botonPlatillo" onClick="agregarPlato( { codigo:' + arreglo[i].codigo + ', nombre:\'' + arreglo[i].nombre + '\', precio: ' + arreglo[i].precio + '})" />';
        strHTML += '<input id="Button1" type="button" value="Quitar" class="botonPlatilloQuitar" onClick="QuitarPlato( ' + arreglo[i].codigo + ' )" /></td></tr></table></td>';

        if (((i+1) % 4) == 0) {
            strHTML += '</tr><tr>';
        }
    }


    while ((i % 4) != 0) {
        strHTML += '<td style="width:25%; vertical-align:top;"></td>';
        i++;
    }

    strHTML += '</tr></table>';
  }

  document.getElementById('tdPlatillos').innerHTML = strHTML;
}

function mostrarFiltro(prmOpcion, prmNombre, prmPrimerRadio, prmOpcionMenu) {
    if (opcionMenuActiva != ''){
      if (opcionMenuActiva != prmOpcionMenu){
        marcarOpcion (opcionMenuActiva, false);
      }
    }

    marcarOpcion (prmOpcionMenu, true);
    opcionMenuActiva = prmOpcionMenu;

    if (filtroActivo != ''){
      document.getElementById(filtroActivo).setAttribute('hidden', true);
      filtroActivo = '';
    }

    document.getElementById('tdFiltro' + prmNombre).removeAttribute('hidden');
    filtroActivo = 'tdFiltro' + prmNombre;
    document.getElementById(prmPrimerRadio).click();
}

function marcarOpcion(prmOpcionMenu, prmSeleccionar){
  if (prmSeleccionar){
    document.getElementById(prmOpcionMenu).className = 'opcionMenuPrincipalSel';
  }
  else {
    document.getElementById(prmOpcionMenu).className = 'opcionMenuPrincipal';
  }
}

function agregarPlato(prmPlato) {
    var i = 0;
    var total = 0;
    var strHTML = '';

    ordenMesa.push(prmPlato)
    mostrarOrden();
}

function QuitarPlato(prmCodigo) {
    var i = 0;
    var quitar = 0
    var strHTML = '';

    for (i = 0; i < ordenMesa.length; i++) {
        if (ordenMesa[i].codigo == prmCodigo) {
            ordenMesa.splice(i, 1);
            i = ordenMesa.length + 100;
        }
    }

    mostrarOrden();
}

function mostrarOrden() {
    var i = 0;
    var strHTML = '';
    var total = 0;

    for (i = 0; i < ordenMesa.length; i++) {
        strHTML += ordenMesa[i].codigo + ': ' + ordenMesa[i].nombre + ' Q. ' + ordenMesa[i].precio + '<br>';
        total += parseFloat(ordenMesa[i].precio);
    }

    strHTML += 'TOTAL : Q. ' + total;

    document.getElementById('tblOrden').innerHTML = strHTML;
}
