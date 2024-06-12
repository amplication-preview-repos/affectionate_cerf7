/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogService } from "../blog.service";
import { BlogCreateInput } from "./BlogCreateInput";
import { Blog } from "./Blog";
import { BlogFindManyArgs } from "./BlogFindManyArgs";
import { BlogWhereUniqueInput } from "./BlogWhereUniqueInput";
import { BlogUpdateInput } from "./BlogUpdateInput";

export class BlogControllerBase {
  constructor(protected readonly service: BlogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Blog })
  async createBlog(@common.Body() data: BlogCreateInput): Promise<Blog> {
    return await this.service.createBlog({
      data: data,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        isPublished: true,
        publishedDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Blog] })
  @ApiNestedQuery(BlogFindManyArgs)
  async blogs(@common.Req() request: Request): Promise<Blog[]> {
    const args = plainToClass(BlogFindManyArgs, request.query);
    return this.service.blogs({
      ...args,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        isPublished: true,
        publishedDate: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Blog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blog(
    @common.Param() params: BlogWhereUniqueInput
  ): Promise<Blog | null> {
    const result = await this.service.blog({
      where: params,
      select: {
        author: true,
        content: true,
        createdAt: true,
        id: true,
        isPublished: true,
        publishedDate: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Blog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlog(
    @common.Param() params: BlogWhereUniqueInput,
    @common.Body() data: BlogUpdateInput
  ): Promise<Blog | null> {
    try {
      return await this.service.updateBlog({
        where: params,
        data: data,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          isPublished: true,
          publishedDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Blog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlog(
    @common.Param() params: BlogWhereUniqueInput
  ): Promise<Blog | null> {
    try {
      return await this.service.deleteBlog({
        where: params,
        select: {
          author: true,
          content: true,
          createdAt: true,
          id: true,
          isPublished: true,
          publishedDate: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
