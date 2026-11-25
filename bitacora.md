# Bitácora: Lista enlazada de Lola

## 1. Diagrama de nodos y enlaces

Se creó una lista enlazada simple para almacenar las atenciones veterinarias de Lola. Cada nodo contiene los datos de una atención y una referencia al siguiente nodo.

```text
cabez
  |
  v
+-------------------------+
| Nodo 1                 |
| Fecha: 02/02            |
| Motivo: Vacunación     |
| Costo: 85000            |
| siguiente              |
+-------------------------+
          |
          v
+-------------------------+
| Nodo 2                 |
| Fecha: 15/03            |
| Motivo: Control de peso|
| Costo: 40000            |
| siguiente              |
+-------------------------+
          |
          v
+-------------------------+
| Nodo 3                 |
| Fecha: 20/05            |
| Motivo: Limpieza dental|
| Costo: 150000           |
| siguiente: null         |
+-------------------------+
```

El recorrido comienza desde la referencia `cabez` y avanza mediante la propiedad `siguiente` hasta encontrar un nodo cuyo enlace sea `null`.

## 2. Pérdida intencional de un enlace

Para observar qué sucede cuando se pierde un enlace, se ejecutó la siguiente instrucción:

```javascript
nodo1.siguiente = null;
```

Esta instrucción elimina la conexión entre el primer nodo y el segundo.

El diagrama queda de la siguiente manera:

```text
cabez
  |
  v
+-------------------------+
| Nodo 1                 |
| Fecha: 02/02            |
| Motivo: Vacunación     |
| Costo: 85000            |
| siguiente: null         |
+-------------------------+

          X

+-------------------------+
| Nodo 2                 |
| Fecha: 15/03            |
| Costo: 40000            |
+-------------------------+
          |
          v
+-------------------------+
| Nodo 3                 |
| Fecha: 20/05            |
| Costo: 150000           |
| siguiente: null         |
+-------------------------+
```

## 3. Resultado del recorrido

Al recorrer nuevamente la lista desde `cabez`, solamente se muestra la primera atención veterinaria.

Esto sucede porque el enlace `siguiente` del primer nodo ahora contiene `null`. El ciclo `while` termina cuando encuentra ese valor y no puede continuar hacia los siguientes nodos.

Los nodos 2 y 3 todavía existen en memoria, pero ya no son accesibles mediante el recorrido que comienza en `cabez`.

## 4. Conclusión

Una lista simplemente enlazada depende de sus referencias para conectar los nodos. Si se pierde un enlace, se interrumpe el recorrido y los nodos que estaban después de esa conexión quedan inaccesibles desde el inicio de la lista.

Esta prueba demuestra la importancia de mantener correctamente los enlaces entre los nodos para conservar el acceso a toda la información almacenada.