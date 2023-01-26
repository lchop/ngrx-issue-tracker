import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { randomId } from "../utils/utils";
import { Issue } from "../models/issues";
import { Observable } from "rxjs";

interface Database { 
    issues: Issue[];
}

@Injectable()
export class DatabaseService implements InMemoryDbService {
    createDb(): Database { 
        return {
            issues: [ 
                {
                    id: this.genId(),
                    title: "Example Issue",
                    description: "This is a pre-existing issue", 
                    priority: "medium",
                    resolved: false,
                },
            ],
        }; 
    }

    genId(): string { 
        return randomId();
    }
}