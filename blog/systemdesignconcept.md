- client server architecture
The client sends a request to store, retrieve, or modify data.
The server receives the request, processes it, performs the necessary operations, and sends back a response.
How does the client even know where to find the server?

- IP Address
A client doesn’t magically know where a server is, it needs an address to locate and communicate with it.
On the internet, computers identify each other using IP addresses, which work like phone numbers for servers.

- DNS
Instead of relying on hard-to-remember IP addresses, we use something much more human-friendly: domain names.
When you type algomaster.io into your browser, your computer asks a DNS server for the corresponding IP address.
Once the DNS server responds with the IP, your browser uses it to establish a connection with the server and make a request.

- Proxy / Reverse Proxy
When you visit a website, your request doesn’t always go directly to the server—sometimes, it passes through a proxy or reverse proxy first.
A proxy server acts as a middleman between your device and the internet.
When you request a webpage, the proxy forwards your request to the target server, retrieves the response, and sends it back to you.
Proxy hides your IP address, keeping your location and identity private.
A reverse proxy works the other way around. It intercepts client requests and forwards them to backend servers based on predefined rules.

Why reverse proxy?
Allowing direct access to servers can pose security risks, exposing them to threats like hackers and DDoS attacks.
A reverse proxy mitigates these risks by acting as a controlled entry point that regulates incoming traffic and hides server IPs.

- latency
Whenever a client communicates with a server, there’s always some delay. One of the biggest causes of this delay is physical distance.
This round-trip delay is called latency—the total time it takes for data to travel between the client and the server.

How to reduce lantency?
One way to reduce latency is by deploying our service across multiple data centers worldwide.

Once a connection is made, how do clients and servers actually communicate?
- http/https
Every time you visit a website, your browser and the server communicate using a set of rules called HTTP (Hypertext Transfer Protocol).

- http
HTTP has a major security flaw, it sends data in plain text. This is a serious problem, especially for sensitive information like passwords, credit card details, and personal data.

- https
 HTTPS encrypts all data using SSL/TLS, ensuring that even if someone intercepts the request, they can’t read or alter it.

 HTTP is just a protocol for transferring data but it doesn’t define:

- API
Think of an API as a middleman that allows clients (like web and mobile apps) to communicate with servers without worrying about low-level details.
APIs provide a layer of abstraction—the client doesn’t need to know how the server processes the request, only that it returns the expected data.

- rest API
A REST API follows a set of rules that define how clients and servers communicate over HTTP in a structured way.
Rest is 
* Stateless: Every request is independent; the server doesn’t store client state
* Resource-Based: Everything is treated as a resource (e.g., /users, /orders, /products)

REST APIs are great because they’re simple, scalable, and easy to cache, but they have limitations, especially when dealing with complex data retrieval.
REST endpoints often return more data than needed, leading to inefficient network usage. If an API doesn’t return related data, the client may need to make multiple requests to retrieve all required information.

- GraphQL
REST, which forces clients to retrieve fixed sets of data, GraphQL lets clients ask for exactly what they need—nothing more, nothing less.
GraphQL also comes with trade-offs—it requires more processing on the server side and isn’t as easy to cache as REST.

- Databases
If our application deals with small amounts of data, we could store it in memory.
That’s why we need a dedicated server for storing and managing data—a database.

- SQL 
databases store data in tables with a strict predefined schema and follow the ACID properties.
Atomicity - A transaction is all-or-nothing (it either completes fully or not at all).
Consistency – Data always remains valid and follows defined rules.
Isolation – Transactions don’t interfere with each other.
Durability – Once data is saved, it won’t be lost, even if the system crashes.

- NoSQL
NoSQL databases on the other hand are designed for high scalability and performance.
Key-Value Stores – Fast lookups for simple key-value pairs (e.g., Redis).
Document Stores – Store flexible, JSON-like documents (e.g., MongoDB).

- vertical scaling (making a single machine more powerful)
As our user base grows, so does the number of requests hitting our application servers.
Initially, a single server might be enough to handle the load. But, as traffic increases, that single server can become a bottleneck, slowing everything down.
One of the quickest solutions is to upgrade the existing server by adding more CPU, RAM or storage.
limits:
* hardware limit
* cost 
* single point of failure (SPOF)

- Horizontal Scaling (add more servers)
we distribute the workload across multiple machines. This approach is better.
* No Single Point of Failure
* More capacity
* Cost-effective


how do clients know which server to connect to?
- load balancer
* Round Robin       → Requests are sent to servers sequentially, one after another in a loop.
* Least Connections → Requests are sent to the server with the fewest active connections.
* IP Hashing → Requests from the same IP address always go to the same server, which helps with session consistency.

database scaling techniques
- db indexing
One of the quickest and most effective ways to speed up database read queries is indexing.
An index stores column values along with pointers to the actual data rows in the table.

Indexes are typically created on columns that are frequently queried, such as:
Primary keys
Foreign keys
Columns used in WHERE conditions

! while indexes speed up reads, they slow down writes (INSERT, UPDATE, DELETE) since the index needs to be updated whenever data changes.
only index the most frequently accessed columns

- Replication
we can scale our database by creating copies of it across multiple servers.
* We have one primary database (also called the Primary Replica) that handles all write operations (INSERT, UPDATE, DELETE).
* We have multiple read replicas that handle read queries (SELECT).
* Whenever data is written to the primary database, it gets copied to the read replicas so that they stay in sync.


what if we need to scale writes or store huge amounts of data?
- sharding (horizontal partitioning) rows 
we split the database into smaller, more manageable pieces and distribute them across multiple servers.
3 shards with 1 millions rows each
* We divide the database into smaller parts called shards.
* Each shard contains a subset of the total data.
* Data is distributed based on a sharding key (e.g., user ID).

benefits:
Reduce database load 
Speed up read and write performance


what if the issue isn’t the number of rows, but rather the number of columns?
- Vertical Partitioning
This improves query performance since each request only scans relevant columns instead of the entire table.
It reduces unnecessary disk I/O, making data retrieval quicker.
However, no matter how much we optimize the database, retrieving data from disk is always slower than retrieving from memory.

- cache
Caching is used to optimize the performance of a system by storing frequently accessed data in memory instead of repeatedly fetching it from the database.
-> Cache Aside Pattern.
* cache hit ? read cache
* cache miss ? read db

To prevent outdated data from being served, we use Time-to-Live (TTL)—an expiration time set on cached data so it gets automatically refreshed after a certain period.

- Denormalization
Most relational databases use Normalization to store data efficiently by breaking it into separate tables.

- Normalization

- CAP Theorem
As we scale our system across multiple servers, databases, and data centers, we enter the world of distributed systems.
- Consistency (C) → Every node always returns the most recent data.
- Availability (A) → The system always responds to requests, even if some nodes are down (but the data may not be the latest).
- Partition Tolerance (P) → The system continues operating even if there’s a network failure between nodes.

Consistency + Partition Tolerance (CP) → Ensures every request gets the latest data but may reject requests during failures. Example: SQL databases like MySQL.

Availability + Partition Tolerance (AP) → Ensures the system always responds, even if some data is stale. Example: NoSQL databases like Cassandra and DynamoDB.


- blob storage
Traditional databases are not designed to store large, unstructured files efficiently.
Blob Storage like Amazon S3—a highly scalable and cost-effective way to store large, unstructured files in the cloud.
* These blobs are stored inside logical containers or buckets in the cloud.
* Each file gets a unique URL, making it easy to retrieve and serve over the web.

- cdn
Instead of serving content from a single data center, a CDN caches static contents on multiple edge servers located worldwide.

- websockets
HTTP, which follows a request-response model is slow for real time.
With HTTP, the only way to get real-time updates is through polling—sending repeated requests every few seconds.

WebSockets enable real-time communication between a client and a server, but what if a server needs to notify another server when an event occurs?

- webhooks
payment -> provider -> post to receiver webhook url

- microservices
Each microservice:
* Handles a single responsibility
* Has its own database and logic, so it can scale independently.
* Communicates with other microservices using APIs or message queues.

when multiple microservices need to communicate, direct API calls aren’t always efficient—this is where Message Queues come in.

- message queue
A Message Queue enables services to communicate asynchronously, allowing requests to be processed without blocking other operations.
1. A producer (e.g., checkout service) places a message in the queue (e.g., "Process Payment").
2. The queue temporarily holds the message until a consumer (e.g., payment service) is ready to process it.
3. The consumer retrieves the message and processes it.
message queue systems include: Apache Kafka, Amazon SQS and RabbitMQ.

But, how do we prevent overload for the public APIs and services we deploy.
- rate limiting
Rate Limiting restricts the number of requests a client can send within a specific time frame.
Imagine a bot starts making thousands of requests per second to your website.
Without restrictions, this could:
* Crash your servers by consuming all available resources.
* Increase cloud costs due to excessive API usage.
* and degrade performance for legitimate users.
HTTP 429 – Too Many Requests

- API Gateways (nginx)
Centralized service that handles authentication, rate limiting, logging and monitoring, and request routing.
Instead of exposing each service directly, an API Gateway acts as a single entry point for all client requests.
The client sends a request to the API Gateway.
* The Gateway validates the request (e.g., authentication, rate limits).
* It routes the request to the appropriate micro-service.
* The response is sent back through the Gateway to the client.

- Idempotency
In distributed systems, network failures and service retries are common. If a user accidentally refreshes a payment page, the system might receive two payment requests instead of one.
Idempotency ensures that repeated requests produce the same result as if the request was made only once.
Each request is assigned a unique ID (e.g., request_1234).
- Before processing, the system checks if the request has already been handled.
- If yes → It ignores the duplicate request.
- If no → It processes the request normally.