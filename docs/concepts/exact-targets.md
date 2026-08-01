---
title: Exact SpatialAnalyzer targets
---

# Exact SpatialAnalyzer targets

Each Briosa distribution is a complete product for one exact SpatialAnalyzer
release. The baseline product lives under
`targets/2026.1.0529.7/` in the server repository.

The exact release identifies the binary, package, interop provenance, and
runtime compatibility gates. It does not appear in public protobuf package,
service, message, or RPC names. The public wire package remains `briosa`.

## Three identities, checked separately

Briosa preserves three separate claims:

1. the exact SA release configured by the Briosa product;
2. the SDK engine/type library actually activated on the machine; and
3. the SpatialAnalyzer application to which the SDK connection is attached.

COM activation can resolve independently of the connected application. A
successful connection is therefore not proof that all three match. Runtime
evidence takes precedence over an operator attestation, and Briosa fails closed
on a verified mismatch.

## Why the target stays out of the API

Keeping target identity in product and artifact coordinates allows generated
clients to retain stable `briosa` service names. A client selects the matching
server distribution instead of encoding an SA release into every call.

The
[target source](https://github.com/spatialanalyzer/briosa/tree/main/targets/2026.1.0529.7)
is authoritative for this website's compatibility claims.
