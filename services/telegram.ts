const sendMessageToGroup = async (
  text: string,
  parseMode: 'HTML' | 'MarkdownV2' = 'MarkdownV2',
) => {
  await fetch(`/api/sendMessageToTelegram/?text=${text}&parse_mode=${parseMode}`)
}

export { sendMessageToGroup }
