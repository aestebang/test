import { ErrorBoundary } from "react-error-boundary";

function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{ padding: "1rem", background: "#ffe6e6", color: "red" }}
    >
      <h2>⚠️ Algo salió mal</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reintentar</button>
    </div>
  );
}

// Ejemplo de componente funcional que falla
function TaskList() {
  // Simulamos un error
  throw new Error("Error al cargar las tareas");
  return <div>Lista de tareas</div>;
}

export default function AppTest() {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={() => {
        // Lógica opcional para reiniciar estado
        console.log("Error reseteado");
      }}
    >
      <TaskList />
    </ErrorBoundary>
  );
}
