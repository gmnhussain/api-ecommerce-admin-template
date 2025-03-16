'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2 } from 'lucide-react';
import { Role } from '@/types/user';

export function RolesList() {
  const { data: session } = useSession();
  const [roles, setRoles] = useState<Role[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchRoles = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/roles`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${session?.accessToken}`,
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setRoles(data);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch roles:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (session?.accessToken) {
  //     fetchRoles();
  //   }
  // }, [session]);

  // For demo purposes, show sample data if API call isn't made
  useEffect(() => {
    // if (!session?.accessToken) {
    setRoles([
      {
        id: '1',
        name: 'Administrator',
        description: 'Full access to all resources',
        permissionCount: 42,
        userCount: 3,
        isDefault: true,
      },
      {
        id: '2',
        name: 'Manager',
        description: 'Can manage products, orders, and view reports',
        permissionCount: 28,
        userCount: 8,
        isDefault: false,
      },
      {
        id: '3',
        name: 'Editor',
        description: 'Can edit product information and content',
        permissionCount: 15,
        userCount: 12,
        isDefault: false,
      },
      {
        id: '4',
        name: 'Customer Support',
        description: 'Can view orders and manage customer inquiries',
        permissionCount: 10,
        userCount: 6,
        isDefault: false,
      },
    ]);
    setIsLoading(false);
    // }
  }, [session]);

  if (isLoading) {
    return <div>Loading roles...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Roles</CardTitle>
        <CardDescription>
          Create and manage roles to control access to different parts of your
          admin panel.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead>Users</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>{role.permissionCount}</TableCell>
                <TableCell>{role.userCount}</TableCell>
                <TableCell>
                  {role.isDefault ? (
                    <Badge variant="secondary">Default</Badge>
                  ) : (
                    <Badge variant="outline">Custom</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      disabled={role.isDefault}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
