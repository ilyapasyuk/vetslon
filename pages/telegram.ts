const sendMessageToGroup = async (text: string) => {
  await fetch(`/api/sendMessageToTelegram/?text=${text}`)
}

export { sendMessageToGroup }
