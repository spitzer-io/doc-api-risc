define({ "api": [
  {
    "type": "post",
    "url": "/api-risc/schedule-sync/create",
    "title": "Create login in Service",
    "name": "PostAuthCreateLogin",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>List profile</p>",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "auth",
            "description": "<p>Auth create</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Auth username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.token",
            "description": "<p>Auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 201 OK\n[{\n  \"id\": \"1\",\n  \"username\": email,\n  \"token\": \"eRZWw6nWqopOVo2Pbr5Z2XhYleY9O0kh\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api-risc/schedule-sync/login",
    "title": "Login all service",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n      --url https://api.spitzer.io/api-risc/schedule-sync/login \\\n      --header 'Authorization: 23asd1f23sa1fs23df1s2df1' \\\n      --header 'Content-Type: application/x-www-form-urlencoded' \\\n      --data username=teste@teste.com \\\n      --data password=12345678",
        "type": "curl"
      }
    ],
    "group": "Auth",
    "name": "PostAuthLogin",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>You must pass your username and password, separated by: in base64 format, example of this user, teste@teste.com:12345678</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Login's list</p>"
          },
          {
            "group": "Success 200",
            "type": "username",
            "optional": false,
            "field": "result.username",
            "description": "<p>Auth username</p>"
          },
          {
            "group": "Success 200",
            "type": "token",
            "optional": false,
            "field": "result.token",
            "description": "<p>Auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"uername\": teste@teste.com,\n  \"token\": \"asdfsadfsadfsadfsdafasdfd\",\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/customers",
    "title": "List all customers",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n      --url http://api.spitzer.io/api-risc/schedule-sync/customers \\\n      --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "group": "Customers",
    "name": "Customers",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result",
            "description": "<p>Customers's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result._id",
            "description": "<p>Customer id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Customer name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Stage\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/customer/index.js",
    "groupTitle": "Customers"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/doctors/all",
    "title": "All doctors.",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/doctors/all?customer=5ce5e06d2a311a13c55505b9'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetAllDoctor",
    "group": "Doctor",
    "description": "<p>List All Doctors</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "doctors",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Doctor id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.crm",
            "description": "<p>Doctor crm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Doctor name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.cpf",
            "description": "<p>Doctor cpf</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.advice",
            "description": "<p>Doctor advice</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Doctor email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.specialist",
            "description": "<p>Doctor scpecialist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"crm\": 2121,\n  \"name\": Joao,\n  \"cpf\": 3212312312123,\n  \"advice\": CRM,\n  \"email\": joao@joao.com,\n  \"specialist\": \"Cardiologia\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/doctor/index.js",
    "groupTitle": "Doctor"
  },
  {
    "type": "get",
    "url": "/doctors/specialist",
    "title": "All specialties released to the Health Insurance.",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/doctors/specialist?customer=5ce5e06d2a311a13c55505b9&healthInsurance=35&=&birthDay=01%2F01%2F1990'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetAllSpecialist",
    "group": "Doctor",
    "description": "<p>List All Specialist</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "specialist",
            "description": "<p>Specialist's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Specialist id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Specialist name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Cardiologia\",\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/doctor/index.js",
    "groupTitle": "Doctor"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/doctors",
    "title": "Doctor with Parameters",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/doctors?customer=5ce5e06d2a311a13c55505b9&healthInsurance=35&specialist=225120&birthDay=12%2F31%2F1990'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "group": "Doctor",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "healthInsurance",
            "description": "<p>The healthInsurance - ID.*</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthDay",
            "description": "<p>The birthDay - 12/31/1990</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialist",
            "description": "<p>The Specialist - ID.*</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "doctors",
            "description": "<p>Doctor's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Doctor id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Doctor name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n   \"message\": \"success\",\n   \"result\": [\n     {\n       \"id\": 1,\n       \"crm\": 12345,\n       \"name\": \"MARCO DASILVA\",\n       \"advice\": \"CRM\",\n       \"email\": \"silva@email.com\",\n       \"phone\": \"41123456789\",\n       \"mobile\": \"419999877744\",\n       \"specialist\": \"Médico cardiologista\",\n       \"calendarId\": \"eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg\"\n   ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/doctor/index.js",
    "groupTitle": "Doctor",
    "name": "GetApiRiscScheduleSyncDoctors"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/doctors/profile/:calendarId",
    "title": "Profile Doctor.",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --curl --request GET \\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/doctors/profile/eyJhbGciOiJIUzI1NiJ9.MTM1ODkkMQ.e6YodxjY3HNg8cgCnf8gnT3RHaAQENxT5QjHsKnPJk0?customer=5e4ee35b462560492f99a162&crm=13589' \\\n   --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQHJpc2MuY29tIiwiaWQiOiI1ZThkMmZhYTQyYTI4MDE1YmUzMzYxODAiLCJpYXQiOjE1ODc1NjcxNjAsImV4cCI6MTU4NzY1MzU2MH0.ha2tccj0VLRDVO82FI3cN7wl80uX8us17hxOCjXcYXI' \\\n   --cookie __cfduid=d50911b677afc4146169a8902e1aa63f71558381007",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetProfileDoctor",
    "group": "Doctor",
    "description": "<p>List profile</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "crm",
            "description": "<p>The Doctor - advice</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "doctors",
            "description": "<p>list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Doctor id</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.crm",
            "description": "<p>Doctor crm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Doctor name</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.cpf",
            "description": "<p>Doctor cpf</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.advice",
            "description": "<p>Doctor advice</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.email",
            "description": "<p>Doctor email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.specialist",
            "description": "<p>Doctor scpecialist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n       \"id\": 13589,\n       \"crm\": 13589,\n       \"name\": \"Adriano Pienaro Chrisostomo\",\n       \"cpf\": \"12365478932\",\n       \"advice\": 0,\n       \"email\": \"stage@spitzer.com.br\",\n       \"codeHealthInsurance\": 110,\n       \"healthInsurance\": \"ICS\"\n     },\n     \"calendarId\": \"eyJhbGciOiJIUzI1NiJ9.MTM1ODkkMQ.e6YodxjY3HNg8cgCnf8gnT3RHaAQENxT5QjHsKnPJk0\",\n     \"codeHealthInsurance\": [\n     {\n       \"codeHealthInsurance\": 110,\n       \"healthInsurance\": \"ICS\"\n     },\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The &lt; code &gt; id &lt; /code&gt; of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/doctor/index.js",
    "groupTitle": "Doctor"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/health-insurance",
    "title": "List all health insurance",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/health-insurance?customer=5ce5e06d2a311a13c55505b9&healthInsurance=1&birthDay=01%2F01%2F1990'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "User"
      }
    ],
    "name": "GetHealthInsurance",
    "group": "Health_Insurance",
    "description": "<p>List Health Insurance</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "health-insurance",
            "description": "<p>health insurance's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>health-insurance id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>health-insurancesk name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Study\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/health-insurance/index.js",
    "groupTitle": "Health_Insurance"
  },
  {
    "type": "get",
    "url": "/doctoralia/patient",
    "title": "List Patient",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'https://api.spizter.io/doctoralia/patient?customer=5ce5e06d2a311a13c55505b9'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "permission": [
      {
        "name": "User"
      }
    ],
    "group": "List_Patient",
    "description": "<p>List Patient</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>The Customer - ID.*</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patient",
            "description": "<p>The id - ID.*</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "name": "GetAllPatient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "patient",
            "description": "<p>patient's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>patient id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>patient name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[{\n     \"id\": 3459,\n     \"name\": \"TESTE\",\n     \"birthDay\": \"1981-10-19T00:00:00.000Z\",\n     \"city\": \"Pinhais\",\n     \"state\": \"PR\",\n     \"address\": \"RUA TESTE\",\n     \"phone\": \"2123123123\",\n     \"mobile\": \"121123121\",\n     \"email\": \"teste@hotmail.com\",\n     \"cep\": 808540340,\n     \"healthInsuranceCode\": 111,\n     \"healthInsuranceName\": \"AMIL\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/patient/index.js",
    "groupTitle": "List_Patient"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/:calendarId/available-appointments",
    "title": "List all appointments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api-spitzer.io/api-risc/schedule-sync/eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg/available-appointments?initial_datetime=02%2F02%2F2020&end_datetime=02%2F20%2F2020&customer=5ce5e06d2a311a13c55505b9'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "group": "Schedule",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CalendarID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initial_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "available",
            "description": "<p>appointments's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.agenda_id",
            "description": "<p>Schedule agenda_id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.initial_datetime",
            "description": "<p>Schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "result.end_datetime",
            "description": "<p>Schedule end_datetime</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "result.available_times",
            "description": "<p>Schedule available_times</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n\"agenda_id\": \"eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg\",\n\"initial_datetime\": \"10/10/2019\",\n\"end_datetime\": \"10/30/2019\",\n\"available_times\": [\n\"2019-10-15T09:20\",\n\"2019-10-29T10:40\"\n],\n\"blockedTimes\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/schedule/available-appointments/index.js",
    "groupTitle": "Schedule",
    "name": "GetApiRiscScheduleSyncCalendaridAvailableAppointments"
  },
  {
    "type": "get",
    "url": "/api-risc/schedule-sync/:calendarId/scheduled-appointments",
    "title": "Scheduled Appointments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl--request GET\\\n   --url 'http://api.spitzer.io/api-risc/schedule-sync/eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg/scheduled-appointments?initial_datetime=02%2F02%2F2020&end_datetime=02%2F20%2F2020&customer=5ce5e06d2a311a13c55505b9&health_insurance=35'\\\n     --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc'",
        "type": "curl"
      }
    ],
    "group": "Schedule",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ID",
            "description": "<p>id scheduled</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "health_insurance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initial_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completed",
            "description": "<p>appointments's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.doctor",
            "description": "<p>Schedule doctor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.client",
            "description": "<p>Schedule client</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.mobile",
            "description": "<p>Schedule mobile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.obs",
            "description": "<p>Schedule obs</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.origin",
            "description": "<p>Schedule origin</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.date_schedule",
            "description": "<p>Schedule date_schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.hour_schedule",
            "description": "<p>Schedule hour_schedule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[{\n     \"results\": {\n       \"results\": [{\n         \"id\": 232734,\n         \"doctor\": \"JOAO DA SILVA\",\n         \"client\": \"Maria teste\",\n         \"mobile\": \"41999175744\",\n         \"obs\": \"1212121\",\n         \"origin\": \"web\",\n         \"date_schedule\": \"18/02/2020\",\n         \"hour_schedule\": \"10:40:00:000\"\n       }]\n     },\n     \"message\": \"success\"\n   }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/schedule/scheduled-appointments/index.js",
    "groupTitle": "Schedule",
    "name": "GetApiRiscScheduleSyncCalendaridScheduledAppointments"
  },
  {
    "type": "post",
    "url": "/api-risc/schedule-sync/:calendarId/schedule-appointment",
    "title": "schedule appointments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request POST \\\n    --url 'http://api.spitzer.io/api-risc/schedule-sync/eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg/schedule-appointment?customer=5ce5e06d2a311a13c55505b9' \\\n    --header 'content-type: application/x-www-form-urlencoded' \\\n    --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc' \\\n    --data health_insurance=113 \\\n    --data appointment_datetime=2020-04-02T08:41 \\\n    --data 'client_name=Maria teste' \\\n    --data client_birthdate=1985-06-28 \\\n    --data client_phone_number=41999175744 \\\n    --data client_email=alexandre@clinic.com.br \\\n    --data external_id=1212121 \\\n    --data customer=5ce5e06d2a311a13c55505b9 \\\n    --data cpf=04469687901 \\\n    --data gender=M",
        "type": "curl"
      }
    ],
    "group": "Schedule",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "description": "<p>When passing the data for scheduling as cpf, gender and date of birth, the system goes to the database to check if the patient is already registered, if or patient has not been registered, he will register or patient.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "health_insurance",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "appointment_datetime",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_name",
            "description": "<p>Name this patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_birthdate",
            "description": "<p>birth day this patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_phone_number",
            "description": "<p>phone this patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_email",
            "description": "<p>email this patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": "<p>Id external yout application</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>cpf external yout application</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>gender yout application</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completed",
            "description": "<p>appointments's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.message",
            "description": "<p>Schedule message</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.status",
            "description": "<p>Schedule is status?</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.record",
            "description": "<p>Schedule record patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{\n  \"result\": {\n    \"results\": {\n      \"status\": 0,\n      \"message\": \"Agendamento Confirmado\",\n       \"record\": \"32123132\",\n      \"id\": 205183\n    }\n  },\n\"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "permission": [
      {
        "name": "user"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/schedule/schedule-appointment/index.js",
    "groupTitle": "Schedule",
    "name": "PostApiRiscScheduleSyncCalendaridScheduleAppointment"
  },
  {
    "type": "put",
    "url": "/api-risc/schedule-sync/:calendarId/cancel-appointment",
    "title": "Cancel appointments",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --request PUT \\\n  --url 'api.spitzer.io/api-risc/schedule-sync/eyJhbGciOiJIUzI1NiJ9.MTAxODUkNTAz.RA1UPh0hZ3PYneQBe8DGlfu1_UgJWf6K0jpuku2rjtg/cancel-appointment?customer=5ce5e06d2a311a13c55505b9'\\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --header 'x-access-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNldHVwQGRvY3RvcmFsaWEuY29tIiwiaWQiOiI1ZTI1ZTI1ZjRmZTUyOTU1ZjM0ODc1YTkiLCJpYXQiOjE1Nzk1NDExMjgsImV4cCI6MTU3OTYyNzUyOH0.XPmkzNxlsxn8dW6fRNVoF5HOcsLhaLpWV7NBhyfYUcc' \\\n  --data external_id=12 \\\n  --data id=232734 \\\n  --data health_insurance=35",
        "type": "curl"
      }
    ],
    "group": "Schedule",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "calendarId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "health_insurance",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "available",
            "description": "<p>appointments's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.status",
            "description": "<p>Schedule is status</p>"
          },
          {
            "group": "Success 200",
            "type": "message",
            "optional": false,
            "field": "result.message",
            "description": "<p>message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "{\n  \"result\": {\n    \"results\": {\n      \"status\": 0,\n      \"message\": \"Cancelamento Confirmado\"\n    }\n  },\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/schedule/cancel-appointment/index.js",
    "groupTitle": "Schedule",
    "name": "PutApiRiscScheduleSyncCalendaridCancelAppointment"
  },
  {
    "type": "put",
    "url": "/api-risc/schedule-sync/:calendarId/completed-appointments",
    "title": "completed appointments",
    "group": "Schedule",
    "header": {
      "fields": {
        "Auth": [
          {
            "group": "Auth",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "completed",
            "description": "<p>appointments's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.id",
            "description": "<p>Schedule id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.title",
            "description": "<p>Schedule title</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.done",
            "description": "<p>Schedule is done?</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.updated_at",
            "description": "<p>Update's date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "tasks.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"id\": 1,\n  \"title\": \"Study\",\n  \"done\": false\n  \"updated_at\": \"2016-02-10T15:46:51.778Z\",\n  \"created_at\": \"2016-02-10T15:46:51.778Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/http/routes/api-risc/procedure/completed-appointments/index.js",
    "groupTitle": "Schedule",
    "name": "PutApiRiscScheduleSyncCalendaridCompletedAppointments"
  }
] });
