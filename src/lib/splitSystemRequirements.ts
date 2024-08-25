export const splitSystemRequirements = (requirements: string) => {
  const sections = requirements.split(/(?<=\.)\s+/)

  return sections.map((section) => section.trim())
}
