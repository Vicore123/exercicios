let fila = ['Maria1', 'João2', 'Ana3', 'Pedro', 'Sofia', 'Carlos', 'Beatriz', 'André', 'Laura', 'Guilherme']
let UltimosAtendidos = []

for (i=0; i<3; i++) {
    UltimosAtendidos.unshift(fila.shift())
    atendidosAmanha = fila
}
console.log('lista dos ultimos atendidos ' + UltimosAtendidos);
console.log('lista dos atendidos amanha ' + atendidosAmanha);