export function sanitizeChromaServerUrl(url: string): string
{
	if (!url)
	{
		return ''
	}

	if (url.endsWith('/'))
	{
		return url.slice(0, -1)
	}

	return url
}
