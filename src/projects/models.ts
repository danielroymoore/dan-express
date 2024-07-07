import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/database";

export interface ProjectAttributes {
  id: string;
  url: string;
  status: string;
  country: string;
}

export class Project
  extends Model<ProjectAttributes>
  implements ProjectAttributes
{
  public id: string;
  public url: string;
  public status: string;
  public country: string;
}

Project.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    timestamps: false,
  }
);

export interface PaginatedProjects {
  projects: Project[];
  totalCount: number;
}
