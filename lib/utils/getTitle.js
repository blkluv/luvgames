export const getTitle = (role) => {
  if (role === 'founder') {
    return 'Founder'
  } else if (role === 'hero') {
    return 'Hero'
  } else if (role === 'research') {
    return 'Research Coordinator'
  } else if (role === 'content') {
    return 'Content Writer'
  } else {
    return 'Community Ambassador'
  }
}
