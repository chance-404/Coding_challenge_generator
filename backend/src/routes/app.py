from src.database import challenge
from fastapi import FastAPI, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from clerk_backend_api import Clerk
import os

clerk_sdk = Clerk(bearer_auth=os.getenv("CLERK_SECRET_KEY"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"]
    )

app.include_router(challenge.router, prefix="/api")