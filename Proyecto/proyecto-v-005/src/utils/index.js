export const formatDate = (date) => {
    const dateParsed = new Date(date)

    if (isNaN(dateParsed)) {
      return;
    }
  
    const localeDefault = 'en-US'
  
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }
  
    return new Intl.DateTimeFormat(localeDefault, options).format(dateParsed)
  }