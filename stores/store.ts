export const useStore = defineStore('store', () => {
  const { send } = useChatgpt()

  // create a state that stores the answers returned from the chatbot
  const state = reactive({
    answers: [] as string[]
  })

  // create a getter that returns the last answer
  const getters = {
    lastAnswer: computed(() => state.answers[state.answers.length - 1])
  }

  // create an action that sends a message to the chatbot and stores the answer
  const actions = {
    async send(message: string) {
      const answer = await send(message)
      state.answers.push(answer)
    }
  }

  return {
    ...toRefs(state),
    ...getters,
    ...actions
  }
})
