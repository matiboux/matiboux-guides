---
title: Deploy ChromaDB
---

## Deploy in Docker

Use the following command to deploy ChromaDB locally in a Docker container:

```bash
docker run -d --rm -p 8000:8000 chromadb/chroma
```

ChromaDB will be available at [http://localhost:8000](http://localhost:8000).

On a production server, you may want to set up a volume to persist data and change the default ChromaDB configuration:

```bash
docker run -d --rm -p 8000:8000 \
  -v ./chroma:/chroma/chroma \
  -e IS_PERSISTENT=TRUE \
  -e ANONYMIZED_TELEMETRY=TRUE \
  chromadb/chroma
```



## Deploy in Kubernetes

### Using Helm

Use the following commands to deploy ChromaDB in a Kubernetes cluster using a community Helm chart.

Override the variables with your own values for your deployment environment.
- `kube_namespace`: Kubernetes namespace where to deploy ChromaDB. May be empty to use the current namespace context.
- `chromadb_host`: Hostname to use in Ingress configuration to expose the ChromaDB API.

```bash
kube_namespace='chromadb'
chromadb_host='chromadb.example.com'

helm upgrade --install \
	chromadb chromadb \
  $([ -n "${kube_namespace}" ] && echo "--namespace ${kube_namespace}") \
	--repo https://amikos-tech.github.io/chromadb-chart \
	--set chromadb.apiVersion="0.4.24" \
	--set ingress.enabled=true \
	--set ingress.hosts[0].host="${chromadb_host}" \
	--set ingress.hosts[0].paths[0].path="/" \
	--set ingress.hosts[0].paths[0].pathType="ImplementationSpecific" \
	--set ingress.annotations."cert-manager\.io/cluster-issuer"="letsencrypt-prod" \
	--set ingress.tls[0].secretName="chromadb-tls" \
	--set ingress.tls[0].hosts[0]="${chromadb_host}"

kubectl patch \
	ingress/chromadb \
  $([ -n "${kube_namespace}" ] && echo "--namespace ${kube_namespace}") \
	--type=json \
	-p '[{"op": "add", "path": "/metadata/annotations/nginx.ingress.kubernetes.io~1proxy-body-size", "value": "0"}]'
```
