CREATE TABLE "public.Users" (
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("username")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.Movies" (
	"id" SERIAL,
	"movie_name" varchar(255) NOT NULL,
	"movie_genre" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL,
	"score" FLOAT(1),
	"username" varchar(255) NOT NULL,
    "imgURL" varchar(255) NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "public.Movies" ADD CONSTRAINT "public.Movies_fk0" FOREIGN KEY ("username") REFERENCES "Users"("username");