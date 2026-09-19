# AGENTS.md — Contrato de Atuação do Agente (Padrão Engenharia Universal v3.2)

## 📌 Identificação do Projeto
- **Nome:** Landing Page & Dashboard Volkswagen (Consultora Miriane Alves)
- **Tecnologias:** HTML5, CSS3, JavaScript ES6+, Node.js, Supabase PostgreSQL, Surge Cloud
- **Padrão de Engenharia:** Universal Engineering Standard v3.2

---

## 🛡️ Regras Fundamentais de Operação (Invioláveis)

1. **PROTO-GOV-01 (Aprovação Prévia Obrigatória):**
   - O Agente NUNCA deve alterar arquivos de código sem antes apresentar uma Proposta de Execução detalhada e receber a AUTORIZAÇÃO EXPLÍCITA do usuário.

2. **CTX-RESTORE-01 (Pontos de Restauração / Ledger):**
   - Toda alteração autorizada e concluída DEVE ser registrada como um Ponto de Restauração (Checkpoint) no arquivo `ESTADO.md` e acompanhada de um commit/tag Git.
   - Reversões devem ser feitas SEMPRE via Git e nunca de memória.

3. **IA-EVIDENCE-01 (Evidência Obrigatória):**
   - Nenhuma tarefa será considerada pronta sem testes e evidência concreta de funcionamento.

4. **DOC-VIVA-01 (Documentação Simultânea):**
   - Toda alteração técnica relevante deve atualizar simultaneamente os documentos `ESTADO.md` e `FASES.md`.

---

## 🔁 Fluxo de Trabalho em 4 Passos

```
1. PROPOSTA  ---> Apresenta Plano e aguarda aprovação do usuário.
2. EXECUÇÃO  ---> Aplica alterações estritamente autorizadas.
3. CHECKPOINT---> Registra Ponto de Restauração em ESTADO.md e Git.
4. EVIDÊNCIA ---> Valida o funcionamento com testes/verificação.
```
