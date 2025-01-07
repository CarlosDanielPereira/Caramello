document.addEventListener('DOMContentLoaded', () => {
    const selection = document.getElementById('selection');
    const result = document.getElementById('result');
  
    // Adiciona um evento de mudança na caixa de seleção
    selection.addEventListener('change', () => {
      const value = selection.value; // Obtém o valor da opção selecionada
  
      // Verifica qual opção foi escolhida
      if (value === 'wec') {
        result.textContent = 'Você selecionou a Opção 1. Aqui estão os detalhes correspondentes.';
        result.style.display = 'block'; // Exibe o resultado
      } else if (value === 'f1') {
        result.textContent = 'Você selecionou a Opção 2. Aqui estão as informações específicas.';
        result.style.display = 'block'; // Exibe o resultado
      } else {
        result.style.display = 'none'; // Oculta o resultado caso nada seja selecionado
      }
    });
  });
  